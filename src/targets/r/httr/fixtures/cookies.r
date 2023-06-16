library(httr)

<<<<<<< HEAD
url <- "https://httpbin.org/cookies"

response <- VERB("GET", url, content_type("application/octet-stream"), set_cookies(`foo` = "bar", `bar` = "baz"))
=======
url <- "http://mockbin.com/har"

response <- VERB("POST", url, content_type("application/octet-stream"), set_cookies(`foo` = "bar", `bar` = "baz"))
>>>>>>> upstream/master

content(response, "text")