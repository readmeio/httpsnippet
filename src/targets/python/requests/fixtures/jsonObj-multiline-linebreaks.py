import requests

url = "https://httpbin.org/anything"

payload = {"message": "foo\nbar\nbaz"}
headers = {"content-type": "application/json"}

response = requests.post(url, json=payload, headers=headers)

print(response.text)