import requests

url = "https://httpbin.org/anything"

querystring = {"foo":["bar","baz"],"baz":"abc","key":"value"}

response = requests.get(url, params=querystring)

print(response.text)