require "http/client"

url = "http://httpbin.org/anything"

response = HTTP::Client.get url
puts response.body