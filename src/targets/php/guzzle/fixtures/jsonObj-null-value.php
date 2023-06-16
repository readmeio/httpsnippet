<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://httpbin.org/anything', [
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'http://mockbin.com/har', [
>>>>>>> upstream/master
  'body' => '{"foo":null}',
  'headers' => [
    'content-type' => 'application/json',
  ],
]);

echo $response->getBody();