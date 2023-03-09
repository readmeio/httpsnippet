<?php
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('POST', 'https://httpbin.org/anything', [
  'body' => '{"message":"foo\\\\nbar\\\\nbaz"}',
  'headers' => [
    'content-type' => 'application/json',
  ],
]);

echo $response->getBody();