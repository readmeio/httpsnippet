const data = new FormData();
data.append('foo', 'bar');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/multipart-form-data.js
xhr.open("POST", "https://httpbin.org/anything");
=======
xhr.open('POST', 'http://mockbin.com/har');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/multipart-form-data.js

xhr.send(data);