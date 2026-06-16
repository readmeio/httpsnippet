FROM node:22-alpine AS node
FROM rust:alpine3.22

COPY integrations/https-cert/rootCA.pem /root/integration-test.pem

# install the integration test certs
RUN apk --no-cache add ca-certificates && \
  rm -rf /var/cache/apk/* && \
  cp /root/integration-test.pem /usr/local/share/ca-certificates/ && \
  update-ca-certificates

COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN apk add --no-cache libstdc++ && \
  ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && \
  ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# Pre-warm the Cargo dependency cache at the same path EXEC_FUNCTION.rust uses
# so that each integration test only recompiles src/main.rs, not all dependencies.
RUN mkdir -p /tmp/rust_integration_test/src && \
  printf '[package]\nname = "integration_test"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies]\nreqwest = { version = "0.12", features = ["json", "multipart", "rustls-tls-native-roots"], default-features = false }\ntokio = { version = "1", features = ["full"] }\nserde_json = { version = "1", features = ["preserve_order"] }\n' > /tmp/rust_integration_test/Cargo.toml && \
  printf 'use reqwest;\nuse serde_json;\n#[tokio::main]\nasync fn main() {}\n' > /tmp/rust_integration_test/src/main.rs && \
  cargo build --manifest-path /tmp/rust_integration_test/Cargo.toml

WORKDIR /src

# add package.json and run npm install so that we only re-do npm install if
# package.json has changed
ADD package.json /src/
RUN npm install

ADD . /src
