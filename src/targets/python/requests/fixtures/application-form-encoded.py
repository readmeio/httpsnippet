import requests

url = "https://httpbin.org/anything"

payload = {
    "foo": "bar",
    "hello": "world"
}
headers = {"content-type": "application/x-www-form-urlencoded"}

response = requests.post(url, data=payload, headers=headers)

print(response.text)