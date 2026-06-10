require 'faraday'

conn = Faraday.new(
  url: 'http://httpbin.org',
)

response = conn.get('/anything') do |req|
end

puts response.status
puts response.body