<<<<<<< HEAD
HttpResponse<String> response = Unirest.get("https://httpbin.org/headers")
  .header("accept", "application/json")
  .header("x-foo", "Bar")
  .header("x-bar", "Foo")
=======
HttpResponse<String> response = Unirest.get("http://mockbin.com/har")
  .header("accept", "application/json")
  .header("x-foo", "Bar")
  .header("quoted-value", "\"quoted\" 'string'")
>>>>>>> upstream/master
  .asString();