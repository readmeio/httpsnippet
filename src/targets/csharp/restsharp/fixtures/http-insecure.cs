var options = new RestClientOptions("http://httpbin.org/anything");
var client = new RestClient(options);
var request = new RestRequest("");
var response = await client.GetAsync(request); 