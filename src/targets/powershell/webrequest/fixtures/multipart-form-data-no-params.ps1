$headers=@{}
$headers.Add("Content-Type", "multipart/form-data")
<<<<<<< HEAD
$response = Invoke-WebRequest -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers
=======
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method POST -Headers $headers
>>>>>>> upstream/master
