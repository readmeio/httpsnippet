using System.Net.Http.Headers;
var client = new HttpClient();
var request = new HttpRequestMessage
{
    Method = HttpMethod.Get,
<<<<<<< HEAD
    RequestUri = new Uri("https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value"),
=======
    RequestUri = new Uri("https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"),
>>>>>>> upstream/master
};
using (var response = await client.SendAsync(request))
{
    response.EnsureSuccessStatusCode();
    var body = await response.Content.ReadAsStringAsync();
    Console.WriteLine(body);
}