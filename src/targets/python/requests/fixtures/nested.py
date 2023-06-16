import requests

<<<<<<< HEAD
url = "https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value"

response = requests.get(url)

print(response.text)
=======
url = "http://mockbin.com/har"

querystring = {"foo[bar]":"baz,zap","fiz":"buz","key":"value"}

response = requests.get(url, params=querystring)

print(response.json())
>>>>>>> upstream/master
