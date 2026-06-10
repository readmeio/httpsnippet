require "http/client"

url = "https://httpbin.org/anything"

response = HTTP::Client.exec "PROPFIND", url
puts response.body