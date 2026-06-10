require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
)

response = conn.get('/headers') do |req|
  req.headers['accept'] = 'application/json'
  req.headers['x-foo'] = 'Bar'
  req.headers['x-bar'] = 'Foo'
  req.headers['quoted-value'] = '"quoted" \'string\''
end

puts response.status
puts response.body