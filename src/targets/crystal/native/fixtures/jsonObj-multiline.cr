require "http/client"

url = "https://httpbin.org/anything"
headers = HTTP::Headers{
  "content-type" => "application/json"
}
reqBody = "{\n  \"foo\": \"bar\"\n}"

response = HTTP::Client.post url, headers: headers, body: reqBody
puts response.body