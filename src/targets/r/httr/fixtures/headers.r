library(httr)

<<<<<<< HEAD
url <- "https://httpbin.org/headers"

response <- VERB("GET", url, add_headers('x-foo' = 'Bar', 'x-bar' = 'Foo'), content_type("application/octet-stream"), accept("application/json"))
=======
url <- "http://mockbin.com/har"

response <- VERB("GET", url, add_headers('x-foo' = 'Bar', 'quoted-value' = '"quoted" \'string\''), content_type("application/octet-stream"), accept("application/json"))
>>>>>>> upstream/master

content(response, "text")