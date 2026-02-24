curl --request POST \
  --url https://httpbin.org/anything \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data-urlencode 'query=hello world' \
  --data-urlencode 'filter=status=active&type=user'