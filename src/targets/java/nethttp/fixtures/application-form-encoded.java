HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://httpbin.org/anything"))
    .header("content-type", "application/x-www-form-urlencoded")
    .method("POST", HttpRequest.BodyPublishers.ofString("foo=bar&hello=world"))
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());