HttpRequest request = HttpRequest.newBuilder()
<<<<<<< HEAD
    .uri(URI.create("https://httpbin.org/cookies"))
    .header("cookie", "foo=bar; bar=baz")
    .method("GET", HttpRequest.BodyPublishers.noBody())
=======
    .uri(URI.create("https://httpbin.org/anything"))
    .header("content-type", "application/json")
    .method("POST", HttpRequest.BodyPublishers.noBody())
>>>>>>> upstream/master
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());