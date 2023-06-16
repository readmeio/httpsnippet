open Cohttp_lwt_unix
open Cohttp
open Lwt

<<<<<<< HEAD
let uri = Uri.of_string "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value" in
=======
let uri = Uri.of_string "http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value" in
>>>>>>> upstream/master

Client.call `GET uri
>>= fun (res, body_stream) ->
  (* Do stuff with the result *)