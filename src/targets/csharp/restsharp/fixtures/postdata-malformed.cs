using RestSharp;


var options = new RestClientOptions("https://httpbin.org/anything");
var client = new RestClient(options);
var request = new RestRequest("");
request.AddHeader("content-type", "application/json");
var response = await client.PostAsync(request);

Console.WriteLine("{0}", response.Content);
