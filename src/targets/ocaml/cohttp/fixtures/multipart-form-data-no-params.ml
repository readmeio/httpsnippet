open Cohttp_lwt_unix
open Cohttp
open Lwt

<<<<<<< HEAD
let uri = Uri.of_string "https://httpbin.org/anything" in
=======
let uri = Uri.of_string "http://mockbin.com/har" in
>>>>>>> upstream/master
let headers = Header.add (Header.init ()) "Content-Type" "multipart/form-data" in

Client.call ~headers `POST uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)