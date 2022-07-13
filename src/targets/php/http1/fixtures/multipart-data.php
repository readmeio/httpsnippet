<?php

$request = new HttpRequest();
$request->setUrl('https://httpbin.org/anything');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders([
  'content-type' => 'multipart/form-data; boundary=---011000010111000001101001'
]);

<<<<<<< HEAD:__tests__/__fixtures__/output/php/http1/multipart-data.php
$request->setBody('-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain

Hello World
-----011000010111000001101001
Content-Disposition: form-data; name="bar"

Bonjour le monde
-----011000010111000001101001--
=======
$request->setBody('-----011000010111000001101001
Content-Disposition: form-data; name="foo"; filename="hello.txt"
Content-Type: text/plain

Hello World
-----011000010111000001101001
Content-Disposition: form-data; name="bar"

Bonjour le monde
-----011000010111000001101001--
>>>>>>> upstream/master:src/targets/php/http1/fixtures/multipart-data.php
');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}