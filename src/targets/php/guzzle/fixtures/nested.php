<?php
<<<<<<< HEAD
require_once('vendor/autoload.php');

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value');
=======

$client = new \GuzzleHttp\Client();

$response = $client->request('GET', 'http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value');
>>>>>>> upstream/master

echo $response->getBody();