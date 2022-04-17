import requests

url = "https://httpbin.org/anything"

payload = {"foo": "bar"}

response = requests.request("POST", url, data=payload)

print(response.text)
