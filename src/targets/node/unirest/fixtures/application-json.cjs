const unirest = require('unirest');

const req = unirest('POST', 'https://httpbin.org/anything');

req.headers({
  'content-type': 'application/json'
});

req.type('json');
req.send({
  number: 1,
  string: 'f"oo',
  arr: [
    1,
    2,
    3
  ],
  nested: {
    a: 'b'
  },
  arr_mix: [
    1,
    'a',
    {
      arr_mix_nested: []
    }
  ],
  boolean: false
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});