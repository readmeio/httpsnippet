wget --quiet \
  --method GET \
  --header 'accept: application/json' \
  --header 'x-foo: Bar' \
<<<<<<< HEAD
  --header 'x-bar: Foo' \
  --output-document \
  - https://httpbin.org/headers
=======
  --header 'quoted-value: "quoted" '\''string'\''' \
  --output-document \
  - http://mockbin.com/har
>>>>>>> upstream/master
