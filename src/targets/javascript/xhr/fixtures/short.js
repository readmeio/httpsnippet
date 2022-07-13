const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/short.js
xhr.open("GET", "https://httpbin.org/anything");
=======
xhr.open('GET', 'http://mockbin.com/har');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/short.js

xhr.send(data);