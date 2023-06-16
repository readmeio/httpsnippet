$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$cookie = New-Object System.Net.Cookie
$cookie.Name = 'foo'
$cookie.Value = 'bar'
$cookie.Domain = 'httpbin.org'
$session.Cookies.Add($cookie)
$cookie = New-Object System.Net.Cookie
$cookie.Name = 'bar'
$cookie.Value = 'baz'
$cookie.Domain = 'httpbin.org'
$session.Cookies.Add($cookie)
<<<<<<< HEAD
$response = Invoke-RestMethod -Uri 'https://httpbin.org/cookies' -Method GET -WebSession $session
=======
$response = Invoke-RestMethod -Uri 'http://mockbin.com/har' -Method POST -WebSession $session
>>>>>>> upstream/master
