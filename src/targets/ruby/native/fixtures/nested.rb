require 'uri'
require 'net/http'
require 'openssl'

<<<<<<< HEAD
url = URI("https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value")
=======
url = URI("https://httpbin.org/anything")
>>>>>>> upstream/master

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body