require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
  headers: {'Content-Type' => 'multipart/form-data; boundary=---011000010111000001101001'}
)

response = conn.post('/anything') do |req|
  req.body = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"\r\n\r\nbar\r\n-----011000010111000001101001--"
end

puts response.status
puts response.body