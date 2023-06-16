const url = 'https://httpbin.org/anything';
const options = {method: 'POST', headers: {'content-type': 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}