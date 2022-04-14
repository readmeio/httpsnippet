import requests

url = "https://httpbin.org/anything"

files = {"foo": "bar"}

response = requests.request("POST", url, files=files)

print(response.text)
