import requests

url = "https://httpbin.org/anything"

payload = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"\r\n\r\nbar\r\n-----011000010111000001101001--"
headers = {"Content-Type": "multipart/form-data; boundary=---011000010111000001101001"}

response = requests.post(url, data=payload, headers=headers)

print(response.text)