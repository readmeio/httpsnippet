import requests

url = "http://mockbin.com/har"

files = {"foo": "open('test/fixtures/files/hello.txt', 'rb')"}

response = requests.request("POST", url, files=files)

print(response.text)