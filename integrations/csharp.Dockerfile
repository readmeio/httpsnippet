FROM mcr.microsoft.com/dotnet/runtime:7.0

ADD . /src
WORKDIR /src

CMD dotnet new console -o IntTestCsharp -f net7.0 && \
  cd IntTestCsharp && \
  dotnet add package RestSharp
