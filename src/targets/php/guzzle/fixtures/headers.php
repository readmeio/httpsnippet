<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://httpbin.org/headers', [
  'headers' => [
    'accept' => 'application/json',
    'x-bar' => 'Foo',
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'http://mockbin.com/har', [
  'headers' => [
    'accept' => 'application/json',
    'quoted-value' => '"quoted" \'string\'',
>>>>>>> upstream/master
    'x-foo' => 'Bar',
  ],
]);

echo $response->getBody();