curl --request POST \
<<<<<<< HEAD
  --url https://httpbin.org/anything \
  --header 'content-type: application/json' \
  --data '
{
  "number": 1,
  "string": "f\"oo",
  "arr": [
    1,
    2,
    3
  ],
  "nested": {
    "a": "b"
  },
  "arr_mix": [
    1,
    "a",
    {
      "arr_mix_nested": {}
    }
  ],
  "boolean": false
}
'
=======
  --url http://mockbin.com/har \
  --header 'content-type: application/json' \
  --data '{"number":1,"string":"f\"oo","arr":[1,2,3],"nested":{"a":"b"},"arr_mix":[1,"a",{"arr_mix_nested":{}}],"boolean":false}'
>>>>>>> upstream/master
