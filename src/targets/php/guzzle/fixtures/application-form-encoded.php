<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://httpbin.org/anything', [
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'http://mockbin.com/har', [
>>>>>>> upstream/master
  'form_params' => [
    'foo' => 'bar',
    'hello' => 'world'
  ],
  'headers' => [
    'content-type' => 'application/x-www-form-urlencoded',
  ],
]);

echo $response->getBody();