val client = OkHttpClient()

val request = Request.Builder()
  .url("https://httpbin.org/headers")
  .get()
  .addHeader("accept", "application/json")
  .addHeader("x-foo", "Bar")
<<<<<<< HEAD
  .addHeader("x-bar", "Foo")
=======
  .addHeader("quoted-value", "\"quoted\" 'string'")
>>>>>>> upstream/master
  .build()

val response = client.newCall(request).execute()