(require '[clj-http.client :as client])

(client/post "https://httpbin.org/anything" {:content-type :json
                                             :form-params {:message "foo\nbar\nbaz"}})