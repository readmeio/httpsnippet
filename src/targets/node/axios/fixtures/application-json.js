<<<<<<< HEAD:__tests__/__fixtures__/output/node/axios/application-json.js
const axios = require("axios").default;
=======
const axios = require('axios').default;
>>>>>>> upstream/master:src/targets/node/axios/fixtures/application-json.js

const options = {
  method: 'POST',
  url: 'https://httpbin.org/anything',
  headers: {'content-type': 'application/json'},
  data: {
    number: 1,
    string: 'f"oo',
    arr: [1, 2, 3],
    nested: {a: 'b'},
    arr_mix: [1, 'a', {arr_mix_nested: {}}],
    boolean: false
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });