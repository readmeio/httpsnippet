require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
  headers: {'Content-Type' => 'text/plain'}
)

response = conn.post('/anything') do |req|
  req.body = "Hello World"
end

puts response.status
puts response.body