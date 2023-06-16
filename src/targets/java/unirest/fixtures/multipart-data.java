<<<<<<< HEAD
HttpResponse<String> response = Unirest.post("https://httpbin.org/anything")
=======
HttpResponse<String> response = Unirest.post("http://mockbin.com/har")
>>>>>>> upstream/master
  .header("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .body("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"; filename=\"hello.txt\"\r\nContent-Type: text/plain\r\n\r\nHello World\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"bar\"\r\n\r\nBonjour le monde\r\n-----011000010111000001101001--\r\n")
  .asString();