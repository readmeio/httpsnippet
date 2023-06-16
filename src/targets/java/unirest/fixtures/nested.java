<<<<<<< HEAD
HttpResponse<String> response = Unirest.get("https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value")
=======
HttpResponse<String> response = Unirest.get("http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value")
>>>>>>> upstream/master
  .asString();