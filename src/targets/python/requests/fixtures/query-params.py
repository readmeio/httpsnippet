import requests

url = "https://httpbin.org/anything"

querystring = {"param":"value"}

response = requests.get(url, params=querystring)

print(response.json())