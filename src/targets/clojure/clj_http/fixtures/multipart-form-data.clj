(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:multipart [{:name "foo"
                                                          :content "bar"}]})
=======
(client/post "http://mockbin.com/har" {:multipart [{:name "foo"
                                                    :content "bar"}]})
>>>>>>> upstream/master
