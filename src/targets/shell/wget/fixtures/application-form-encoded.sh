wget --quiet \
  --method POST \
  --header 'content-type: application/x-www-form-urlencoded' \
  --body-data 'foo=bar&hello=world' \
  --output-document \
<<<<<<< HEAD
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master
