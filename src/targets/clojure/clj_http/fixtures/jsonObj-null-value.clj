(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:content-type :json
                                             :form-params {:foo nil}})
=======
(client/post "http://mockbin.com/har" {:content-type :json
                                       :form-params {:foo nil}})
>>>>>>> upstream/master
