import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"

response = requests.get(url)

print(response.text)
=======
url = "http://mockbin.com/har"

response = requests.get(url)

print(response.json())
>>>>>>> upstream/master
