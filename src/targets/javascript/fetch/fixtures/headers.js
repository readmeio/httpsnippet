const url = 'https://httpbin.org/headers';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-foo': 'Bar',
    'x-bar': 'Foo',
    'quoted-value': '"quoted" \'string\''
  }
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}