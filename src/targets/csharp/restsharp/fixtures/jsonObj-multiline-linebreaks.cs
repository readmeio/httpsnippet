var client = new RestClient("https://httpbin.org/anything");
var request = new RestRequest(Method.POST);
request.AddHeader("content-type", "application/json");
request.AddParameter("application/json", "{\"message\":\"foo\\\\nbar\\\\nbaz\"}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);