const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/anything',
=======
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  processData: false,
  data: '{\n  "foo": "bar"\n}'
};

$.ajax(settings).done(function (response) {
  console.log(response);
});