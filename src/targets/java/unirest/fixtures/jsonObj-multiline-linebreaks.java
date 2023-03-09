HttpResponse<String> response = Unirest.post("https://httpbin.org/anything")
  .header("content-type", "application/json")
  .body("{\"message\":\"foo\\\\nbar\\\\nbaz\"}")
  .asString();