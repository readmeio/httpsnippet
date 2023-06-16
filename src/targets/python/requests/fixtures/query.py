import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"

response = requests.get(url)

print(response.text)
=======
url = "http://mockbin.com/har"

querystring = {"foo":["bar","baz"],"baz":"abc","key":"value"}

response = requests.get(url, params=querystring)

print(response.json())
>>>>>>> upstream/master
