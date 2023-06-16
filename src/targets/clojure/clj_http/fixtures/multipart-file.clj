(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:multipart [{:name "foo"
                                                          :content (clojure.java.io/file "src/fixtures/files/hello.txt")}]})
=======
(client/post "http://mockbin.com/har" {:multipart [{:name "foo"
                                                    :content (clojure.java.io/file "test/fixtures/files/hello.txt")}]})
>>>>>>> upstream/master
