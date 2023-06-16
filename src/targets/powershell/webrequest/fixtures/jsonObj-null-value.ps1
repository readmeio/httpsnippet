$headers=@{}
$headers.Add("content-type", "application/json")
<<<<<<< HEAD
$response = Invoke-WebRequest -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers -ContentType 'application/json' -Body '{"foo":null}'
=======
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method POST -Headers $headers -ContentType 'application/json' -Body '{"foo":null}'
>>>>>>> upstream/master
