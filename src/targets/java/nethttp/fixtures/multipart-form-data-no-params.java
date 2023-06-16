HttpRequest request = HttpRequest.newBuilder()
<<<<<<< HEAD
    .uri(URI.create("https://httpbin.org/anything"))
=======
    .uri(URI.create("http://mockbin.com/har"))
>>>>>>> upstream/master
    .header("Content-Type", "multipart/form-data")
    .method("POST", HttpRequest.BodyPublishers.noBody())
    .build();
HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());