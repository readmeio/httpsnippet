wget --quiet \
  --method GET \
  --header 'accept: application/json' \
  --header 'x-foo: Bar' \
  --header 'x-bar: Foo' \
  --output-document \
  - https://httpbin.org/headers