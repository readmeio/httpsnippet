library(httr)

url <- "https://httpbin.org/anything"

payload <- "{\"message\":\"foo\\\\nbar\\\\nbaz\"}"

encode <- "json"

response <- VERB("POST", url, body = payload, content_type("application/json"), encode = encode)

content(response, "text")