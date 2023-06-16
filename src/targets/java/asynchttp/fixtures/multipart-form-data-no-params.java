AsyncHttpClient client = new DefaultAsyncHttpClient();
<<<<<<< HEAD
client.prepare("POST", "https://httpbin.org/anything")
=======
client.prepare("POST", "http://mockbin.com/har")
>>>>>>> upstream/master
  .setHeader("Content-Type", "multipart/form-data")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();