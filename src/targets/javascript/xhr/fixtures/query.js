const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/query.js
xhr.open("GET", "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value");
=======
xhr.open('GET', 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/query.js

xhr.send(data);