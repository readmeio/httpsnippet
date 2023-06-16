OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
<<<<<<< HEAD
  .url("https://httpbin.org/anything")
=======
  .url("http://httpbin.org/anything")
>>>>>>> upstream/master
  .get()
  .build();

Response response = client.newCall(request).execute();