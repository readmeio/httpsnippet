const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open('GET', 'https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value');

xhr.send(data);