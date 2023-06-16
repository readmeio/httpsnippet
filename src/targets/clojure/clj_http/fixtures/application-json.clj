(require '[clj-http.client :as client])

<<<<<<< HEAD
(client/post "https://httpbin.org/anything" {:content-type :json
                                             :form-params {:number 1
                                                           :string "f\"oo"
                                                           :arr [1 2 3]
                                                           :nested {:a "b"}
                                                           :arr_mix [1 "a" {:arr_mix_nested {}}]
                                                           :boolean false}})
=======
(client/post "http://mockbin.com/har" {:content-type :json
                                       :form-params {:number 1
                                                     :string "f\"oo"
                                                     :arr [1 2 3]
                                                     :nested {:a "b"}
                                                     :arr_mix [1 "a" {:arr_mix_nested {}}]
                                                     :boolean false}})
>>>>>>> upstream/master
