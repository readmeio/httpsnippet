$headers=@{}
$headers.Add("content-type", "application/json")
$response = Invoke-RestMethod -Uri 'https://httpbin.org/anything' -Method POST -Headers $headers -ContentType 'application/json' -Body '{"message":"foo\\nbar\\nbaz"}'