curl --request POST \
  --url https://httpbin.org/anything \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data-urlencode foo=bar \
  --data-urlencode hello=world