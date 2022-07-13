<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://httpbin.org/headers');
$request->setRequestMethod('GET');
$request->setHeaders([
<<<<<<< HEAD:__tests__/__fixtures__/output/php/http2/headers.php
  'accept' => 'text/json',
=======
  'accept' => 'application/json',
>>>>>>> upstream/master:src/targets/php/http2/fixtures/headers.php
  'x-foo' => 'Bar',
  'x-bar' => 'Foo'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();