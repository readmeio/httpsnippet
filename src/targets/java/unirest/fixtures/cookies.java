<<<<<<< HEAD
HttpResponse<String> response = Unirest.get("https://httpbin.org/cookies")
=======
HttpResponse<String> response = Unirest.post("http://mockbin.com/har")
>>>>>>> upstream/master
  .header("cookie", "foo=bar; bar=baz")
  .asString();