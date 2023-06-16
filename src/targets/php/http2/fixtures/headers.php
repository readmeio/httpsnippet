<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://httpbin.org/headers');
$request->setRequestMethod('GET');
$request->setHeaders([
  'accept' => 'application/json',
  'x-foo' => 'Bar',
<<<<<<< HEAD
  'x-bar' => 'Foo'
=======
  'quoted-value' => '"quoted" \'string\''
>>>>>>> upstream/master
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();