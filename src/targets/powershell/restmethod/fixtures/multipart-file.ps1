$headers=@{}
$headers.Add("content-type", "multipart/form-data; boundary=---011000010111000001101001")
<<<<<<< HEAD:__tests__/__fixtures__/output/powershell/restmethod/multipart-file.ps1
$response = Invoke-RestMethod -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers -ContentType 'multipart/form-data; boundary=---011000010111000001101001' -Body '-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain


-----011000010111000001101001--
'
=======
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method POST -Headers $headers -ContentType 'multipart/form-data; boundary=---011000010111000001101001' -Body '-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain


-----011000010111000001101001--
'
>>>>>>> upstream/master:src/targets/powershell/webrequest/fixtures/multipart-file.ps1
