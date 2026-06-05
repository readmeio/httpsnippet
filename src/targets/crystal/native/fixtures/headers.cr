require "http/client"

url = "https://httpbin.org/headers"
headers = HTTP::Headers{
  "accept" => "application/json"
  "x-foo" => "Bar"
  "x-bar" => "Foo"
  "quoted-value" => "\"quoted\" 'string'"
}

response = HTTP::Client.get url, headers: headers
puts response.body