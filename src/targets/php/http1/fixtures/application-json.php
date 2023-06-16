<?php

$request = new HttpRequest();
<<<<<<< HEAD
$request->setUrl('https://httpbin.org/anything');
=======
$request->setUrl('http://mockbin.com/har');
>>>>>>> upstream/master
$request->setMethod(HTTP_METH_POST);

$request->setHeaders([
  'content-type' => 'application/json'
]);

$request->setContentType('application/json');
$request->setBody(json_encode([
<<<<<<< HEAD
  'foo' => 'bar'
=======
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
>>>>>>> upstream/master
]));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}