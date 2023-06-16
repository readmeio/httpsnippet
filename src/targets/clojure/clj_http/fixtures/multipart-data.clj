(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:multipart [{:name "foo"
                                                          :content "Hello World"} {:name "bar"
                                                          :content "Bonjour le monde"}]})
=======
(client/post "http://mockbin.com/har" {:multipart [{:name "foo"
                                                    :content "Hello World"} {:name "bar"
                                                    :content "Bonjour le monde"}]})
>>>>>>> upstream/master
