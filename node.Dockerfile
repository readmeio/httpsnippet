FROM node:14

ADD . /src
WORKDIR /src

RUN apt-get update -qq
#RUN apt-get install -qq php7.3 php7.3-curl php7.3-cli
#RUN apt-get install -qq --yes python3

# https://www.npmjs.com/package/axios
# https://www.npmjs.com/package/node-fetch
# https://www.npmjs.com/package/request
# https://www.npmjs.com/package/unirest
RUN npm install axios node-fetch request unirest
