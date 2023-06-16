$headers=@{}
$headers.Add("content-type", "text/plain")
<<<<<<< HEAD
$response = Invoke-WebRequest -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers -ContentType 'text/plain' -Body 'Hello World'
=======
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method POST -Headers $headers -ContentType 'text/plain' -Body 'Hello World'
>>>>>>> upstream/master
