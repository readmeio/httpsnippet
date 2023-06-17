FROM node:20-bullseye-slim AS node
FROM mcr.microsoft.com/dotnet/sdk:7.0-bullseye-slim

# Microsoft's image is built on bullseye, so copy over the appropriate node
# stuff from the node:20-bullseye image. I found the necessary stuff to copy
# here:
# https://github.com/pyodide/pyodide/blob/1691d347d15a2c211cd49aebe6f15d42dfdf2369/Dockerfile#L105
COPY --from=node /usr/local/bin/node /usr/local/bin/
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

WORKDIR /src

# - create a "hello world" project. We will later overwrite Program.cs in that
#   folder with our test fixtures to run them
# - install RestSharp into that project
# - make a folder with the appropriate structure to hold the test fixtures
RUN dotnet new console -o IntTestCsharp -f net7.0 && \
  cd IntTestCsharp && \
  dotnet add package RestSharp && \
  mkdir -p /src/IntTestCsharp/src/fixtures/files

# copy the only test fixture into the fixtures dir
ADD src/fixtures/files/hello.txt /src/IntTestCsharp/src/fixtures/files/

# add pacakge.json first so we don't have to `npm install` unless it changes
ADD package.json /src/
RUN npm install

# keep this last so that once this docker image is built it can be used quickly
ADD . /src

