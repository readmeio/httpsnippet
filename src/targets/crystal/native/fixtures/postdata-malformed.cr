require "http/client"

url = "https://httpbin.org/anything"
headers = HTTP::Headers{
  "content-type" => "application/json"
}

response = HTTP::Client.post url, headers: headers
puts response.body