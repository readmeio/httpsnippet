val client = OkHttpClient()

val request = Request.Builder()
<<<<<<< HEAD
  .url("https://httpbin.org/anything")
=======
  .url("http://mockbin.com/har")
>>>>>>> upstream/master
  .get()
  .build()

val response = client.newCall(request).execute()