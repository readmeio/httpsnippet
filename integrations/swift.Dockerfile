FROM swift:latest

COPY integrations/https-cert/rootCA.pem /usr/local/share/ca-certificates/integration-test.crt
RUN rm -rf /var/lib/apt/lists/* && \
  update-ca-certificates

RUN apt-get update && \
  apt-get install -y nodejs npm curl && \
  npm install -g n && \
  n stable

WORKDIR /src

# add pacakge.json first so we don't have to `npm install` unless it changes
# package.json has changed
ADD package.json /src/
RUN npm install

ADD . /src