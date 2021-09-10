<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://httpbin.org/anything');
$request->setRequestMethod('PROPFIND');
$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
