require 'faraday'

conn = Faraday.new(
  url: 'https://httpbin.org',
)

response = conn.get('/anything') do |req|
  req.params['startTime'] = '2019-06-13T19%3A08%3A25.455Z'
  req.params['endTime'] = '2015-09-15T14%3A00%3A12-04%3A00'
end

puts response.status
puts response.body