$headers=@{}
$headers.Add("accept", "application/json")
$headers.Add("x-foo", "Bar")
<<<<<<< HEAD
$headers.Add("x-bar", "Foo")
$response = Invoke-RestMethod -Uri 'https://httpbin.org/headers' -Method GET -Headers $headers
=======
$headers.Add("quoted-value", "`"quoted`" 'string'")
$response = Invoke-RestMethod -Uri 'http://mockbin.com/har' -Method GET -Headers $headers
>>>>>>> upstream/master
