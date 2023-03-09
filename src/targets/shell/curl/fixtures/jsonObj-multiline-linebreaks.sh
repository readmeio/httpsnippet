curl --request POST \
  --url https://httpbin.org/anything \
  --header 'content-type: application/json' \
  --data '
{
  "message": "foo\nbar\nbaz"
}
'