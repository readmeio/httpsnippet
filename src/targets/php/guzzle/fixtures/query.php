<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value');
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value');
>>>>>>> upstream/master

echo $response->getBody();