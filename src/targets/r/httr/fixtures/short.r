library(httr)

<<<<<<< HEAD
url <- "https://httpbin.org/anything"
=======
url <- "http://httpbin.org/anything"
>>>>>>> upstream/master

response <- VERB("GET", url, content_type("application/octet-stream"))

content(response, "text")