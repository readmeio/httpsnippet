echo '{"number":1,"string":"f\"oo","arr":[1,2,3],"nested":{"a":"b"},"arr_mix":[1,"a",{"arr_mix_nested":{}}],"boolean":false}' |  \
<<<<<<< HEAD:__tests__/__fixtures__/output/shell/httpie/application-json.sh
  http POST https://httpbin.org/anything \
  content-type:application/json
=======
  http POST http://mockbin.com/har \
  content-type:application/json
>>>>>>> upstream/master:src/targets/shell/httpie/fixtures/application-json.sh
