const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD
xhr.open('GET', 'https://httpbin.org/anything');
=======
xhr.open('GET', 'http://mockbin.com/har');
>>>>>>> upstream/master

xhr.send(data);