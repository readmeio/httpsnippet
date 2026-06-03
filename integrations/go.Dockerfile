FROM node:22-alpine AS node
FROM golang:1.24-alpine3.22

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

WORKDIR /src

# add pacakge.json first so we don't have to `npm install` unless it changes
ADD package.json /src/
RUN npm install

# keep this last so that once this docker image is built it can be used quickly
ADD . /src
