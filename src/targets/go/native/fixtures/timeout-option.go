package main

import (
	"fmt"
	"time"
	"strings"
	"net/http"
<<<<<<< HEAD
	"io/ioutil"
=======
	"io"
>>>>>>> upstream/master
)

func main() {

	client := http.Client{
		Timeout: time.Duration(30 * time.Second),
	}

<<<<<<< HEAD
	url := "https://httpbin.org/anything?foo=bar&foo=baz&baz=abc&key=value"
=======
	url := "http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value"
>>>>>>> upstream/master

	payload := strings.NewReader("foo=bar")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("cookie", "foo=bar; bar=baz")
	req.Header.Add("accept", "application/json")
	req.Header.Add("content-type", "application/x-www-form-urlencoded")

	res, _ := client.Do(req)

	defer res.Body.Close()
<<<<<<< HEAD
	body, _ := ioutil.ReadAll(res.Body)
=======
	body, _ := io.ReadAll(res.Body)
>>>>>>> upstream/master

	fmt.Println(res)
	fmt.Println(string(body))

}