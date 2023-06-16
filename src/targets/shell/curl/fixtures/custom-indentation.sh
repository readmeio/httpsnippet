curl --request POST \
<<<<<<< HEAD
@--url 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value' \
=======
@--url 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value' \
>>>>>>> upstream/master
@--header 'accept: application/json' \
@--header 'content-type: application/x-www-form-urlencoded' \
@--cookie 'foo=bar; bar=baz' \
@--data foo=bar