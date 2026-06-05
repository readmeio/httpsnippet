require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
  headers: {'Content-Type' => 'multipart/form-data; boundary=---011000010111000001101001'}
)

response = conn.post('/anything') do |req|
  req.body = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"; filename=\"src/fixtures/files/hello.txt\"\r\nContent-Type: text/plain\r\n\r\nHello World\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"bar\"\r\n\r\nBonjour le monde\r\n-----011000010111000001101001--"
end

puts response.status
puts response.body