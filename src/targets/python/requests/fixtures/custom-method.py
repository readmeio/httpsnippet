import requests

url = "https://httpbin.org/anything"

response = requests.request("PROPFIND", url)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
