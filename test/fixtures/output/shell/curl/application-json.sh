curl --request POST \
  --url http://mockbin.com/har \
  --header 'content-type: application/json' \
  --data '{"number":1,"string":"f\"oo","arr":[1,2,3],"nested":{"a":"b"},"arr_mix":[1,"a",{"arr_mix_nested":{}}],"boolean":false}'


curl --request POST \
  --url https://httpbin.org/post \
  --header 'content-type: application/json' \
  --data-binary @- << EOF
{
  "number": 1,
  "string": "f\"oo",
  "arr": [1, 2, 3],
  "nested": {"a":"b"},
  "arr_mix": [1, "a", {"arr_mix_nested":{}}],
  "boolean": false
}
EOF


curl --request POST \
  --url https://httpbin.org/post \
  --header 'content-type: application/json' \
  --data '
  {
    "number": 1,
    "string": "f\"oo",
    "arr": [1, 2, 3],
    "nested": {
      "a": "b"
    },
    "arr_mix": [1, "a", {
      "arr_mix_nested": {}
    }],
    "boolean": false
  }
  '
