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
        'filename' => 'hello.txt',
>>>>>>> upstream/master
        'contents' => 'Hello World',
        'headers' => [
                'Content-Type' => 'text/plain'
        ]
    ],
    [
        'name' => 'bar',
        'contents' => 'Bonjour le monde'
    ]
  ]
]);

echo $response->getBody();