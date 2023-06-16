const settings = {
  async: true,
  crossDomain: true,
<<<<<<< HEAD
  url: 'https://httpbin.org/anything',
=======
  url: 'http://mockbin.com/har',
>>>>>>> upstream/master
  method: 'PROPFIND',
  headers: {}
};

$.ajax(settings).done(function (response) {
  console.log(response);
});