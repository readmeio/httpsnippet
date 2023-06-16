const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/cookies',
  method: 'GET',
=======
  url: 'http://mockbin.com/har',
  method: 'POST',
>>>>>>> upstream/master
  headers: {
    cookie: 'foo=bar; bar=baz'
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});