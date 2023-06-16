const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value',
=======
  url: 'http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value',
>>>>>>> upstream/master
  method: 'GET',
  headers: {}
};

$.ajax(settings).done(function (response) {
  console.log(response);
});