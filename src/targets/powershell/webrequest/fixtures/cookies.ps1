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
<<<<<<< HEAD:__tests__/__fixtures__/output/powershell/webrequest/cookies.ps1
$response = Invoke-WebRequest -Uri 'https://httpbin.org/cookies' -Method GET -WebSession $session
=======
$response = Invoke-WebRequest -Uri 'http://mockbin.com/har' -Method POST -WebSession $session
>>>>>>> upstream/master:src/targets/powershell/webrequest/fixtures/cookies.ps1
