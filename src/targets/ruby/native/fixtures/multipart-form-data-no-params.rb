require 'uri'
require 'net/http'
<<<<<<< HEAD
require 'openssl'

url = URI("https://httpbin.org/anything")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
=======

url = URI("http://mockbin.com/har")

http = Net::HTTP.new(url.host, url.port)
>>>>>>> upstream/master

request = Net::HTTP::Post.new(url)
request["Content-Type"] = 'multipart/form-data'

response = http.request(request)
puts response.read_body