curl --request GET \
<<<<<<< HEAD
  --url https://httpbin.org/headers \
  --header 'accept: application/json' \
  --header 'x-bar: Foo' \
=======
  --url http://mockbin.com/har \
  --header 'accept: application/json' \
  --header 'quoted-value: "quoted" '\''string'\''' \
>>>>>>> upstream/master
  --header 'x-foo: Bar'