require "http/client"

url = "https://httpbin.org/anything"
headers = HTTP::Headers{
  "content-type" => "text/plain"
}
reqBody = "Hello World"

response = HTTP::Client.post url, headers: headers, body: reqBody
puts response.body