import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"

payload = "foo=bar"
=======
url = "http://mockbin.com/har"

querystring = {"foo":["bar","baz"],"baz":"abc","key":"value"}

payload = { "foo": "bar" }
>>>>>>> upstream/master
headers = {
    "cookie": "foo=bar; bar=baz",
    "accept": "application/json",
    "content-type": "application/x-www-form-urlencoded"
}

<<<<<<< HEAD
response = requests.post(url, data=payload, headers=headers)

print(response.text)
=======
response = requests.post(url, data=payload, headers=headers, params=querystring)

print(response.json())
>>>>>>> upstream/master
