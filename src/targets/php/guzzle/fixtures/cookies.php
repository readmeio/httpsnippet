<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://httpbin.org/cookies', [
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'http://mockbin.com/har', [
>>>>>>> upstream/master
  'headers' => [
    'cookie' => 'foo=bar; bar=baz',
  ],
]);

echo $response->getBody();