import requests

url = "https://httpbin.org/anything"

querystring = {"startTime":"2019-06-13T19%3A08%3A25.455Z","endTime":"2015-09-15T14%3A00%3A12-04%3A00"}

response = requests.get(url, params=querystring)

print(response.json())