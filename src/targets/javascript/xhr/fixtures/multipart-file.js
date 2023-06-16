const data = new FormData();
<<<<<<< HEAD
data.append('foo', 'src/fixtures/files/hello.txt');
=======
data.append('foo', 'test/fixtures/files/hello.txt');
>>>>>>> upstream/master

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD
xhr.open('POST', 'https://httpbin.org/anything');
=======
xhr.open('POST', 'http://mockbin.com/har');
>>>>>>> upstream/master

xhr.send(data);