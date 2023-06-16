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
    'content-type': 'application/x-www-form-urlencoded'
  },
  data: {
    foo: 'bar',
    hello: 'world'
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});