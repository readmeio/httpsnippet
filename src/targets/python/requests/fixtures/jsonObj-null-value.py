import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"

payload = {"foo": None}
=======
url = "http://mockbin.com/har"

payload = { "foo": None }
>>>>>>> upstream/master
headers = {"content-type": "application/json"}

response = requests.post(url, json=payload, headers=headers)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
