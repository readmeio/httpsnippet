$headers=@{}
$headers.Add("content-type", "text/plain")
<<<<<<< HEAD
$response = Invoke-RestMethod -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers -ContentType 'text/plain' -Body 'Hello World'
=======
$response = Invoke-RestMethod -Uri 'http://mockbin.com/har' -Method POST -Headers $headers -ContentType 'text/plain' -Body 'Hello World'
>>>>>>> upstream/master
