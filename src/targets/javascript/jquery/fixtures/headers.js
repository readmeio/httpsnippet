const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/headers',
=======
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-foo': 'Bar',
<<<<<<< HEAD
    'x-bar': 'Foo'
=======
    'quoted-value': '"quoted" \'string\''
>>>>>>> upstream/master
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});