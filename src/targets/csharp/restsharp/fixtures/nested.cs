<<<<<<< HEAD
var client = new RestClient("https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value");
=======
var client = new RestClient("http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value");
>>>>>>> upstream/master
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);