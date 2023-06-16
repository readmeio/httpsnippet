curl --request POST \
<<<<<<< HEAD
  --url https://httpbin.org/anything \
  --header 'content-type: multipart/form-data' \
  --form foo=@src/fixtures/files/hello.txt \
=======
  --url http://mockbin.com/har \
  --header 'content-type: multipart/form-data' \
  --form foo=@hello.txt \
>>>>>>> upstream/master
  --form 'bar=Bonjour le monde'