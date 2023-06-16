import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"

files = {"foo": ("src/fixtures/files/hello.txt", open("src/fixtures/files/hello.txt", "rb"), "text/plain")}

response = requests.post(url, files=files)

print(response.text)
=======
url = "http://mockbin.com/har"

files = { "foo": "open('test/fixtures/files/hello.txt', 'rb')" }

response = requests.post(url, files=files)

print(response.json())
>>>>>>> upstream/master
