(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/get "https://httpbin.org/anything" {:query-params {:foo ["bar" "baz"]
                                                           :baz "abc"
                                                           :key "value"}})
=======
(client/get "http://mockbin.com/har" {:query-params {:foo ["bar" "baz"]
                                                     :baz "abc"
                                                     :key "value"}})
>>>>>>> upstream/master
