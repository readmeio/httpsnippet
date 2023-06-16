library(httr)

<<<<<<< HEAD
url <- "https://httpbin.org/anything"

queryString <- list(
  foo = "bar,baz",
  baz = "abc"
=======
url <- "http://mockbin.com/har"

queryString <- list(
  perPage = "100",
  page = "1"
>>>>>>> upstream/master
)

response <- VERB("GET", url, query = queryString, content_type("application/octet-stream"))

content(response, "text")