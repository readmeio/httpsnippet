<?php

$client = new http\Client;
$request = new http\Client\Request;

$body = new http\Message\Body;
<<<<<<< HEAD
$body->append('{"number":1,"string":"f\\"oo","arr":[1,2,3],"nested":{"a":"b"},"arr_mix":[1,"a",{"arr_mix_nested":{}}],"boolean":false}');

$request->setRequestUrl('https://httpbin.org/anything');
=======
$body->append(json_encode([
  'number' => 1,
  'string' => 'f"oo',
  'arr' => [
    1,
    2,
    3
  ],
  'nested' => [
    'a' => 'b'
  ],
  'arr_mix' => [
    1,
    'a',
    [
        'arr_mix_nested' => [
                
        ]
    ]
  ],
  'boolean' => null
]));
$request->setRequestUrl('http://mockbin.com/har');
>>>>>>> upstream/master
$request->setRequestMethod('POST');
$request->setBody($body);

$request->setHeaders([
  'content-type' => 'application/json'
]);

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();