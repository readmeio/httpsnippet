const url = 'https://httpbin.org/anything';
const options = {method: 'POST', headers: {'Content-Type': 'multipart/form-data'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}