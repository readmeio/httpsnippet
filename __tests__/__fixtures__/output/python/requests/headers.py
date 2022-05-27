import requests

url = "https://httpbin.org/headers"

headers = {
    "accept": "text/json",
    "x-foo": "Bar",
    "x-bar": "Foo"
}

response = requests.get(url, headers=headers)

print(response.text)