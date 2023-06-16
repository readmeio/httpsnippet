package main

import (
	"fmt"
	"strings"
	"net/http"
<<<<<<< HEAD
	"io/ioutil"
=======
	"io"
>>>>>>> upstream/master
)

func main() {

<<<<<<< HEAD
	url := "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"
=======
	url := "http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value"
>>>>>>> upstream/master

	payload := strings.NewReader("foo=bar")

	req, err := http.NewRequest("POST", url, payload)

	if err != nil {
		panic(err)
	}
	req.Header.Add("cookie", "foo=bar; bar=baz")
	req.Header.Add("accept", "application/json")
	req.Header.Add("content-type", "application/x-www-form-urlencoded")

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		panic(err)
	}

	defer res.Body.Close()
<<<<<<< HEAD
	body, err := ioutil.ReadAll(res.Body)
=======
	body, err := io.ReadAll(res.Body)
>>>>>>> upstream/master
	if err != nil {
		panic(err)
	}

	fmt.Println(res)
	fmt.Println(string(body))

}