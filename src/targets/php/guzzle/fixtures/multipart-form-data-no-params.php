<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://httpbin.org/anything', [
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'http://mockbin.com/har', [
>>>>>>> upstream/master
  'headers' => [
    'Content-Type' => 'multipart/form-data',
  ],
]);

echo $response->getBody();