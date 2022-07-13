const data = new FormData();
<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/multipart-data.js
data.append("foo", "Hello World");
data.append("bar", "Bonjour le monde");
=======
data.append('foo', 'test/fixtures/files/hello.txt');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/multipart-file.js

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD:__tests__/__fixtures__/output/javascript/xhr/multipart-data.js
xhr.open("POST", "https://httpbin.org/anything");
=======
xhr.open('POST', 'http://mockbin.com/har');
>>>>>>> upstream/master:src/targets/javascript/xhr/fixtures/multipart-file.js

xhr.send(data);