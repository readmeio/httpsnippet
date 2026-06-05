require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
  headers: {'Content-Type' => 'application/json'}
)

response = conn.post('/anything') do |req|
  req.body = "{\n  \"foo\": \"bar\"\n}"
end

puts response.status
puts response.body