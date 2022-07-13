<<<<<<< HEAD:__tests__/__fixtures__/output/shell/httpie/multipart-data.sh
echo '-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain

Hello World
-----011000010111000001101001
Content-Disposition: form-data; name="bar"

Bonjour le monde
-----011000010111000001101001--
' |  \
  http POST https://httpbin.org/anything \
  content-type:'multipart/form-data; boundary=---011000010111000001101001'
=======
echo '-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain

Hello World
-----011000010111000001101001
Content-Disposition: form-data; name="bar"

Bonjour le monde
-----011000010111000001101001--
' |  \
  http POST http://mockbin.com/har \
  content-type:'multipart/form-data; boundary=---011000010111000001101001'
>>>>>>> upstream/master:src/targets/shell/httpie/fixtures/multipart-data.sh
