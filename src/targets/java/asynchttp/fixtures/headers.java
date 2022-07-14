AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://httpbin.org/headers")
  .setHeader("accept", "application/json")
  .setHeader("x-foo", "Bar")
  .setHeader("x-bar", "Foo")
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();