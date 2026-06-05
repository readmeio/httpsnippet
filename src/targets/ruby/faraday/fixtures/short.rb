require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
)

response = conn.get('/anything') do |req|
end

puts response.status
puts response.body