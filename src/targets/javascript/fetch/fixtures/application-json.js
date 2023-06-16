const url = 'https://httpbin.org/anything';
const options = {
  method: 'POST',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify({
    number: 1,
    string: 'f"oo',
    arr: [1, 2, 3],
    nested: {a: 'b'},
    arr_mix: [1, 'a', {arr_mix_nested: {}}],
    boolean: false
  })
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}