const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value',
=======
  url: 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value',
>>>>>>> upstream/master
  method: 'POST',
  headers: {
    cookie: 'foo=bar; bar=baz',
    accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded'
  },
  data: {
    foo: 'bar'
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});