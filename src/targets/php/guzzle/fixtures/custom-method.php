<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('PROPFIND', 'https://httpbin.org/anything');
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('PROPFIND', 'http://mockbin.com/har');
>>>>>>> upstream/master

echo $response->getBody();