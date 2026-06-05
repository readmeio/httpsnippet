require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
)

response = conn.get('/cookies') do |req|
  req.headers['cookie'] = 'foo=bar; bar=baz'
end

puts response.status
puts response.body