import Foundation

let url = URL(string: "https://httpbin.org/anything?key=value")!
var components = URLComponents(url: url, resolvingAgainstBaseURL: true)!
let queryItems: [URLQueryItem] = [
  URLQueryItem(name: "foo", value: "bar"),
  URLQueryItem(name: "foo", value: "baz"),
  URLQueryItem(name: "baz", value: "abc"),
  URLQueryItem(name: "key", value: "value"),
]
components.queryItems = components.queryItems.map { $0 + queryItems } ?? queryItems

var request = URLRequest(url: components.url!)
request.httpMethod = "GET"
request.timeoutInterval = 10

let (data, _) = try await URLSession.shared.data(for: request)
print(String(decoding: data, as: UTF8.self))