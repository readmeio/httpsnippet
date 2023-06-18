FROM alpine

COPY integrations/https-cert/rootCA.pem /root/integration-test.pem

# install the integration test cert, curl, and node
# RUN cat /root/integration-test.pem >> /etc/ssl/certs/ca-certificates.crt && \
RUN apk --no-cache add ca-certificates && \
  rm -rf /var/cache/apk/* && \
  cp /root/integration-test.pem /usr/local/share/ca-certificates/ && \
  update-ca-certificates && \
  apk update && \
  apk add curl && \
  apk add --update nodejs npm

WORKDIR /src

ADD package.json /src/
RUN npm install

ADD . /src
