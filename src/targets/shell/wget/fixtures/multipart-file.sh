wget --quiet \
  --method POST \
  --header 'content-type: multipart/form-data; boundary=---011000010111000001101001' \
  --body-data '-----011000010111000001101001\r\nContent-Disposition: form-data; name="foo"; filename="hello.txt"\r\nContent-Type: text/plain\r\n\r\n\r\n-----011000010111000001101001--\r\n' \
  --output-document \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/wget/multipart-file.sh
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master:src/targets/shell/wget/fixtures/multipart-file.sh
