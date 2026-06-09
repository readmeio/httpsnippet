require "http/client"

url = "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"

response = HTTP::Client.get url
puts response.body