require 'uri'
require 'net/http'

<<<<<<< HEAD
url = URI("https://httpbin.org/cookies")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url)
=======
url = URI("http://mockbin.com/har")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
>>>>>>> upstream/master
request["cookie"] = 'foo=bar; bar=baz'

response = http.request(request)
puts response.read_body