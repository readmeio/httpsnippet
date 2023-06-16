<?php

$request = new HttpRequest();
$request->setUrl('https://httpbin.org/anything');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders([
<<<<<<< HEAD
  'Content-Type' => 'multipart/form-data'
]);

=======
  'content-type' => 'application/json'
]);

$request->setContentType('application/json');
$request->setBody(json_encode([
  'foo' => null
]));

>>>>>>> upstream/master
try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}