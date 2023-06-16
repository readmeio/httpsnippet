import requests

<<<<<<< HEAD
url = "https://httpbin.org/cookies"

headers = {"cookie": "foo=bar; bar=baz"}

response = requests.get(url, headers=headers)

print(response.text)
=======
url = "http://mockbin.com/har"

headers = {"cookie": "foo=bar; bar=baz"}

response = requests.post(url, headers=headers)

print(response.json())
>>>>>>> upstream/master
