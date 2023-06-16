library(httr)

<<<<<<< HEAD
url <- "https://httpbin.org/anything"
=======
url <- "http://mockbin.com/har"
>>>>>>> upstream/master

payload <- ""

response <- VERB("POST", url, body = payload, content_type("multipart/form-data"))

content(response, "text")