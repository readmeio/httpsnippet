using System.Net.Http.Headers;
var client = new HttpClient();
var request = new HttpRequestMessage
{
    Method = HttpMethod.Get,
<<<<<<< HEAD
    RequestUri = new Uri("https://httpbin.org/anything"),
=======
    RequestUri = new Uri("http://httpbin.org/anything"),
>>>>>>> upstream/master
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}