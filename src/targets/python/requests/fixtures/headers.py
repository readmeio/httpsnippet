import requests

<<<<<<< HEAD
url = "https://httpbin.org/headers"
=======
url = "http://mockbin.com/har"
>>>>>>> upstream/master

headers = {
    "accept": "application/json",
    "x-foo": "Bar",
<<<<<<< HEAD
    "x-bar": "Foo"
=======
    "quoted-value": "\"quoted\" 'string'"
>>>>>>> upstream/master
}

response = requests.get(url, headers=headers)

<<<<<<< HEAD
print(response.text)
=======
print(response.json())
>>>>>>> upstream/master
