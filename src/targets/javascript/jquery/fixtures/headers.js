const settings = {
  async: true,
  crossDomain: true,
  url: 'https://httpbin.org/headers',
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-foo': 'Bar',
    'x-bar': 'Foo'
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});