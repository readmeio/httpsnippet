echo '-----011000010111000001101001
Content-Disposition: form-data; name="foo"

bar
-----011000010111000001101001--
' |  \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/httpie/multipart-form-data.sh
  http POST https://httpbin.org/anything \
  Content-Type:'multipart/form-data; boundary=---011000010111000001101001'
=======
  http POST http://mockbin.com/har \
  Content-Type:'multipart/form-data; boundary=---011000010111000001101001'
>>>>>>> upstream/master:src/targets/shell/httpie/fixtures/multipart-form-data.sh
