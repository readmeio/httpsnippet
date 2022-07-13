<?php

$request = new HttpRequest();
$request->setUrl('https://httpbin.org/headers');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders([
<<<<<<< HEAD:__tests__/__fixtures__/output/php/http1/headers.php
  'accept' => 'text/json',
=======
  'accept' => 'application/json',
>>>>>>> upstream/master:src/targets/php/http1/fixtures/headers.php
  'x-foo' => 'Bar',
  'x-bar' => 'Foo'
]);

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}