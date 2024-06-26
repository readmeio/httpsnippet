HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://httpbin.org/anything"))
    .header("content-type", "text/plain")
    .method("POST", HttpRequest.BodyPublishers.ofString("Hello World"))
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());