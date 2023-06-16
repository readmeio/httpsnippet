(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/get "https://httpbin.org/headers" {:headers {:x-foo "Bar"
                                                     :x-bar "Foo"}
                                           :accept :json})
=======
(client/get "http://mockbin.com/har" {:headers {:x-foo "Bar"
                                                :quoted-value "\"quoted\" 'string'"}
                                      :accept :json})
>>>>>>> upstream/master
