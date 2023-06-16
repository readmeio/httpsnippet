<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
<<<<<<< HEAD
$body->append('{
  "foo": "bar"
}');

$request->setRequestUrl('https://httpbin.org/anything');
=======
$body->append(json_encode([
  'foo' => 'bar'
]));
$request->setRequestUrl('http://mockbin.com/har');
>>>>>>> upstream/master
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders([
  'content-type' => 'application/json'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();