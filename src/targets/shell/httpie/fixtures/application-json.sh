echo '{"number":1,"string":"f\"oo","arr":[1,2,3],"nested":{"a":"b"},"arr_mix":[1,"a",{"arr_mix_nested":{}}],"boolean":false}' |  \
<<<<<<< HEAD
  http POST https://httpbin.org/anything \
=======
  http POST http://mockbin.com/har \
>>>>>>> upstream/master
  content-type:application/json