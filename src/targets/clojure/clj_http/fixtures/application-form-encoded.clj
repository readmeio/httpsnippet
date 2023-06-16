(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:form-params {:foo "bar"
                                                           :hello "world"}})
=======
(client/post "http://mockbin.com/har" {:form-params {:foo "bar"
                                                     :hello "world"}})
>>>>>>> upstream/master
