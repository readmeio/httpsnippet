require "http/client"

url = "https://httpbin.org/cookies"
headers = HTTP::Headers{
  "cookie" => "foo=bar; bar=baz"
}

response = HTTP::Client.get url, headers: headers
puts response.body