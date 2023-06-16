OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
<<<<<<< HEAD
  .url("https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value")
=======
  .url("http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value")
>>>>>>> upstream/master
  .get()
  .build();

Response response = client.newCall(request).execute();