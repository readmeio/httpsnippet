const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD
xhr.open('PROPFIND', 'https://httpbin.org/anything');
=======
xhr.open('PROPFIND', 'http://mockbin.com/har');
>>>>>>> upstream/master

xhr.send(data);