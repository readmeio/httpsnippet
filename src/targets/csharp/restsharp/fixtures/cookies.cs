<<<<<<< HEAD
var client = new RestClient("https://httpbin.org/cookies");
var request = new RestRequest(Method.GET);
=======
var client = new RestClient("http://mockbin.com/har");
var request = new RestRequest(Method.POST);
>>>>>>> upstream/master
request.AddCookie("foo", "bar");
request.AddCookie("bar", "baz");
IRestResponse response = client.Execute(request);