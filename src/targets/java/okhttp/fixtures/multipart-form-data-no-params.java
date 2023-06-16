OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
<<<<<<< HEAD
  .url("https://httpbin.org/anything")
=======
  .url("http://mockbin.com/har")
>>>>>>> upstream/master
  .post(null)
  .addHeader("Content-Type", "multipart/form-data")
  .build();

Response response = client.newCall(request).execute();