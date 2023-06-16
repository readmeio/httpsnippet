val client = OkHttpClient()

val request = Request.Builder()
<<<<<<< HEAD
  .url("https://httpbin.org/anything")
=======
  .url("http://mockbin.com/har")
>>>>>>> upstream/master
  .post(null)
  .addHeader("Content-Type", "multipart/form-data")
  .build()

val response = client.newCall(request).execute()