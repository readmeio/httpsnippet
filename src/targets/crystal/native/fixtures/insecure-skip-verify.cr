require "http/client"

url = "http://httpbin.org/anything"

response = HTTP::Client.get url, tls: OpenSSL::SSL::Context::Client.insecure
puts response.body