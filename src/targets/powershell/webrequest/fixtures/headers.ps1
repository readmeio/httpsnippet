$headers=@{}
$headers.Add("accept", "application/json")
$headers.Add("x-foo", "Bar")
<<<<<<< HEAD
$headers.Add("x-bar", "Foo")
$response = Invoke-WebRequest -Uri 'https://httpbin.org/headers' -Method GET -Headers $headers
=======
$headers.Add("quoted-value", "`"quoted`" 'string'")
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method GET -Headers $headers
>>>>>>> upstream/master
