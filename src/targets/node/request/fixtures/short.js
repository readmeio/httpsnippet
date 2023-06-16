const request = require('request');

<<<<<<< HEAD
const options = {method: 'GET', url: 'https://httpbin.org/anything'};
=======
const options = {method: 'GET', url: 'http://httpbin.org/anything'};
>>>>>>> upstream/master

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});