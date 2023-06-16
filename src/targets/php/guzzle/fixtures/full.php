<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value', [
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value', [
>>>>>>> upstream/master
  'form_params' => [
    'foo' => 'bar'
  ],
  'headers' => [
    'accept' => 'application/json',
    'content-type' => 'application/x-www-form-urlencoded',
    'cookie' => 'foo=bar; bar=baz',
  ],
]);

echo $response->getBody();