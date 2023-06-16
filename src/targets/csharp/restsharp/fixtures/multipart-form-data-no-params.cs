<<<<<<< HEAD
var client = new RestClient("https://httpbin.org/anything");
=======
var client = new RestClient("http://mockbin.com/har");
>>>>>>> upstream/master
var request = new RestRequest(Method.POST);
request.AddHeader("Content-Type", "multipart/form-data");
IRestResponse response = client.Execute(request);