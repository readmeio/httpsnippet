import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything"

payload = "foo=bar&hello=world"
=======
url = "http://mockbin.com/har"

payload = {
    "foo": "bar",
    "hello": "world"
}
>>>>>>> upstream/master
headers = {"content-type": "application/x-www-form-urlencoded"}

response = requests.post(url, data=payload, headers=headers)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
