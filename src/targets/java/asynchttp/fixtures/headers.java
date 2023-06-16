AsyncHttpClient client = new DefaultAsyncHttpClient();
client.prepare("GET", "https://httpbin.org/headers")
  .setHeader("accept", "application/json")
  .setHeader("x-foo", "Bar")
<<<<<<< HEAD
  .setHeader("x-bar", "Foo")
=======
  .setHeader("quoted-value", "\"quoted\" 'string'")
>>>>>>> upstream/master
  .execute()
  .toCompletableFuture()
  .thenAccept(System.out::println)
  .join();

client.close();