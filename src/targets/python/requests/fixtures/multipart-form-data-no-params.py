import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"
=======
url = "http://mockbin.com/har"
>>>>>>> upstream/master

headers = {"Content-Type": "multipart/form-data"}

response = requests.post(url, headers=headers)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
