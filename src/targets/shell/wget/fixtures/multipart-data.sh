wget --quiet \
  --method POST \
  --header 'content-type: multipart/form-data; boundary=---011000010111000001101001' \
  --body-data '-----011000010111000001101001\r\nContent-Disposition: form-data; name="foo"; filename="hello.txt"\r\nContent-Type: text/plain\r\n\r\nHello World\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="bar"\r\n\r\nBonjour le monde\r\n-----011000010111000001101001--\r\n' \
  --output-document \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/wget/multipart-data.sh
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master:src/targets/shell/wget/fixtures/multipart-data.sh
