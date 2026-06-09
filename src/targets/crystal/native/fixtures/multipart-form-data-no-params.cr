require "http/client"

url = "https://httpbin.org/anything"
headers = HTTP::Headers{
  "Content-Type" => "multipart/form-data"
}

response = HTTP::Client.post url, headers: headers
puts response.body