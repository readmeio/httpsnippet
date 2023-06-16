<?php

$client = new http\Client;
$request = new http\Client\Request;

<<<<<<< HEAD
$request->setRequestUrl('https://httpbin.org/anything');
=======
$request->setRequestUrl('http://httpbin.org/anything');
>>>>>>> upstream/master
$request->setRequestMethod('GET');
$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();