<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
$body->append(new http\QueryString([
  'foo' => 'bar',
  'hello' => 'world'
]));

$request->setRequestUrl('https://httpbin.org/anything');
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders([
  'content-type' => 'application/x-www-form-urlencoded'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();