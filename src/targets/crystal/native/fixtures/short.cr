require "http/client"

url = "https://httpbin.org/anything"

response = HTTP::Client.get url
puts response.body