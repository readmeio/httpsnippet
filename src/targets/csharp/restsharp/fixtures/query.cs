<<<<<<< HEAD
var client = new RestClient("https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value");
=======
var client = new RestClient("http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value");
>>>>>>> upstream/master
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);