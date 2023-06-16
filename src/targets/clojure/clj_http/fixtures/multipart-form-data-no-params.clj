(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:headers {:Content-Type "multipart/form-data"}})
=======
(client/post "http://mockbin.com/har" {:headers {:Content-Type "multipart/form-data"}})
>>>>>>> upstream/master
