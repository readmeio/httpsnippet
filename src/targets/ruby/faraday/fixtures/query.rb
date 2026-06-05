require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
)

response = conn.get('/anything') do |req|
  req.params['foo'] = ["bar","baz"]
  req.params['baz'] = 'abc'
  req.params['key'] = 'value'
end

puts response.status
puts response.body