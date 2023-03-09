echo '{"message":"foo\\nbar\\nbaz"}' |  \
  http POST https://httpbin.org/anything \
  content-type:application/json