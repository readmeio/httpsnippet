require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
  headers: {'Content-Type' => 'multipart/form-data'}
)

response = conn.post('/anything') do |req|
end

puts response.status
puts response.body