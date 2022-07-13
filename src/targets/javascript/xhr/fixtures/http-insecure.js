const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/http-insecure.js
xhr.open("GET", "http://httpbin.org/anything");
=======
xhr.open('GET', 'https://mockbin.com/har');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/https.js

xhr.send(data);