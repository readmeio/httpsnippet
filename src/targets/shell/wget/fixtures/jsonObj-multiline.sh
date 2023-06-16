wget --quiet \
  --method POST \
  --header 'content-type: application/json' \
  --body-data '{\n  "foo": "bar"\n}' \
  --output-document \
<<<<<<< HEAD
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master
