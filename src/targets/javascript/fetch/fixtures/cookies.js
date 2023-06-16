const url = 'https://httpbin.org/cookies';
const options = {method: 'GET', headers: {cookie: 'foo=bar; bar=baz'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}