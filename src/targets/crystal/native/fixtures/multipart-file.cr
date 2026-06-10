require "http/client"

url = "https://httpbin.org/anything"
headers = HTTP::Headers{
  "content-type" => "multipart/form-data; boundary=---011000010111000001101001"
}
reqBody = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"; filename=\"src/fixtures/files/hello.txt\"\r\nContent-Type: text/plain\r\n\r\n\r\n-----011000010111000001101001--"

response = HTTP::Client.post url, headers: headers, body: reqBody
puts response.body