const settings = {
  async: true,
  crossDomain: true,
  url: 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value',
  method: 'GET',
  headers: {}
};

$.ajax(settings).done(res => {
  console.log(res);
});