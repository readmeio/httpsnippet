OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
<<<<<<< HEAD
  .url("https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value")
=======
  .url("http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value")
>>>>>>> upstream/master
  .get()
  .build();

Response response = client.newCall(request).execute();