<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://httpbin.org/anything', [
  'multipart' => [
    [
        'name' => 'foo',
        'filename' => 'src/fixtures/files/hello.txt',
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'http://mockbin.com/har', [
  'multipart' => [
    [
        'name' => 'foo',
        'filename' => 'test/fixtures/files/hello.txt',
>>>>>>> upstream/master
        'contents' => null,
        'headers' => [
                'Content-Type' => 'text/plain'
        ]
    ]
  ]
]);

echo $response->getBody();