$headers=@{}
$headers.Add("Content-Type", "multipart/form-data")
<<<<<<< HEAD
$response = Invoke-RestMethod -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers
=======
$response = Invoke-RestMethod -Uri 'http://mockbin.com/har' -Method POST -Headers $headers
>>>>>>> upstream/master
