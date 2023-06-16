require 'uri'
require 'net/http'
<<<<<<< HEAD
require 'openssl'

url = URI("https://httpbin.org/anything")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
=======

url = URI("http://httpbin.org/anything")

http = Net::HTTP.new(url.host, url.port)
>>>>>>> upstream/master

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body