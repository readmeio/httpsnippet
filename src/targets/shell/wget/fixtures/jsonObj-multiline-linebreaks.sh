wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{"message":"foo\\nbar\\nbaz"}' \
  --output-document \
  - https://httpbin.org/anything