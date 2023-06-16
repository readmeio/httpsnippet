wget --quiet \
  --method POST \
  --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
  --body-data '-----011000010111000001101001\r\nContent-Disposition: form-data; name="foo"\r\n\r\nbar\r\n-----011000010111000001101001--\r\n' \
  --output-document \
<<<<<<< HEAD
  - https://httpbin.org/anything
=======
  - http://mockbin.com/har
>>>>>>> upstream/master
