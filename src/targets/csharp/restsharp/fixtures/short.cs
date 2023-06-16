<<<<<<< HEAD
var client = new RestClient("https://httpbin.org/anything");
=======
var client = new RestClient("http://mockbin.com/har");
>>>>>>> upstream/master
var request = new RestRequest(Method.GET);
IRestResponse response = client.Execute(request);