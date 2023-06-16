$headers=@{}
$headers.Add("content-type", "application/x-www-form-urlencoded")
<<<<<<< HEAD
$response = Invoke-WebRequest -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers -ContentType 'application/x-www-form-urlencoded' -Body 'foo=bar&hello=world'
=======
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method POST -Headers $headers -ContentType 'application/x-www-form-urlencoded' -Body 'foo=bar&hello=world'
>>>>>>> upstream/master
