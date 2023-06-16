const data = 'foo=bar';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

<<<<<<< HEAD
xhr.open('POST', 'https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value');
=======
xhr.open('POST', 'http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value');
>>>>>>> upstream/master
xhr.setRequestHeader('cookie', 'foo=bar; bar=baz');
xhr.setRequestHeader('accept', 'application/json');
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

xhr.send(data);