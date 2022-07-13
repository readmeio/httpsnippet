const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/custom-method.js
xhr.open("PROPFIND", "https://httpbin.org/anything");
=======
xhr.open('PROPFIND', 'http://mockbin.com/har');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/custom-method.js

xhr.send(data);