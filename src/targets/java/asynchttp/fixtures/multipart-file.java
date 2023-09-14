AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("POST", "https://httpbin.org/anything")
  .setHeader("content-type", "multipart/form-data; boundary=---011000010111000001101001")
  .setBody("-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"; filename=\"src/fixtures/files/hello.txt\"\r\nContent-Type: text/plain\r\n\r\n\r\n-----011000010111000001101001--")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();