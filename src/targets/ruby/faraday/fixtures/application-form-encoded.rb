require 'faraday'

data = {
  :foo => "bar",
  :hello => "world",
}

conn = Faraday.new(
  url: 'https://httpbin.org',
  headers: {'Content-Type' => 'application/x-www-form-urlencoded'}
)

response = conn.post('/anything') do |req|
  req.body = URI.encode_www_form(data)
end

puts response.status
puts response.body