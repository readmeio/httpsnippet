<<<<<<< HEAD
HttpResponse<String> response = Unirest.get("https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value")
=======
HttpResponse<String> response = Unirest.get("http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value")
>>>>>>> upstream/master
  .asString();