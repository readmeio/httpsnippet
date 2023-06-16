(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/get "https://httpbin.org/cookies" {:headers {:cookie "foo=bar; bar=baz"}})
=======
(client/post "http://mockbin.com/har" {:headers {:cookie "foo=bar; bar=baz"}})
>>>>>>> upstream/master
