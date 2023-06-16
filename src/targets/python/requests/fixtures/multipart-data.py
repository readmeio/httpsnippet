import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"

files = {"foo": ("src/fixtures/files/hello.txt", open("src/fixtures/files/hello.txt", "rb"), "text/plain")}
payload = {"bar": "Bonjour le monde"}

response = requests.post(url, data=payload, files=files)

print(response.text)
=======
url = "http://mockbin.com/har"

files = { "foo": "open('hello.txt', 'rb')" }
payload = { "bar": "Bonjour le monde" }

response = requests.post(url, data=payload, files=files)

print(response.json())
>>>>>>> upstream/master
