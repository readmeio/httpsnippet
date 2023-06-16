import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"

payload = {"foo": "bar"}
=======
url = "http://mockbin.com/har"

payload = { "foo": "bar" }
>>>>>>> upstream/master
headers = {"content-type": "application/json"}

response = requests.post(url, json=payload, headers=headers)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
