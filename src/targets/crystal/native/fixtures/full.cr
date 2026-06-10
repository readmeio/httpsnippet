require "http/client"

url = "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"
headers = HTTP::Headers{
  "cookie" => "foo=bar; bar=baz"
  "accept" => "application/json"
  "content-type" => "application/x-www-form-urlencoded"
}
reqBody = "foo=bar"

response = HTTP::Client.post url, headers: headers, body: reqBody
puts response.body