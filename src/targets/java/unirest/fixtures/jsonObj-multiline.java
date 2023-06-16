<<<<<<< HEAD
HttpResponse<String> response = Unirest.post("https://httpbin.org/anything")
=======
HttpResponse<String> response = Unirest.post("http://mockbin.com/har")
>>>>>>> upstream/master
  .header("content-type", "application/json")
  .body("{\n  \"foo\": \"bar\"\n}")
  .asString();