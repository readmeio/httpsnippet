import Foundation

let headers = ["Content-Type": "multipart/form-data"]

<<<<<<< HEAD
let request = NSMutableURLRequest(url: NSURL(string: "https://httpbin.org/anything")! as URL,
=======
let request = NSMutableURLRequest(url: NSURL(string: "http://mockbin.com/har")! as URL,
>>>>>>> upstream/master
                                        cachePolicy: .useProtocolCachePolicy,
                                    timeoutInterval: 10.0)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers

let session = URLSession.shared
let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
  if (error != nil) {
    print(error as Any)
  } else {
    let httpResponse = response as? HTTPURLResponse
    print(httpResponse)
  }
})

dataTask.resume()