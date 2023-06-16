import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"
=======
url = "http://mockbin.com/har"
>>>>>>> upstream/master

payload = "Hello World"
headers = {"content-type": "text/plain"}

response = requests.post(url, data=payload, headers=headers)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
