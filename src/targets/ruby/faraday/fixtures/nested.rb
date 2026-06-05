require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
)

response = conn.get('/anything') do |req|
  req.params['foo[bar]'] = 'baz,zap'
  req.params['fiz'] = 'buz'
  req.params['key'] = 'value'
end

puts response.status
puts response.body