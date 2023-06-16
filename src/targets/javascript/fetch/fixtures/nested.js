<<<<<<< HEAD
const options = {method: 'GET'};

fetch('https://httpbin.org/anything?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
=======
const url = 'http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value';
const options = {method: 'GET'};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
>>>>>>> upstream/master
