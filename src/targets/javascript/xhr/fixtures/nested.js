const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/nested.js
xhr.open("GET", "https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value");
=======
xhr.open('POST', 'http://mockbin.com/har');
xhr.setRequestHeader('cookie', 'foo=bar; bar=baz');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/cookies.js

xhr.send(data);