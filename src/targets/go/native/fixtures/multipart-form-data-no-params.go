package main

import (
	"fmt"
	"net/http"
<<<<<<< HEAD
	"io/ioutil"
=======
	"io"
>>>>>>> upstream/master
)

func main() {

<<<<<<< HEAD
	url := "https://httpbin.org/anything"
=======
	url := "http://mockbin.com/har"
>>>>>>> upstream/master

	req, _ := http.NewRequest("POST", url, nil)

	req.Header.Add("Content-Type", "multipart/form-data")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
<<<<<<< HEAD
	body, _ := ioutil.ReadAll(res.Body)
=======
	body, _ := io.ReadAll(res.Body)
>>>>>>> upstream/master

	fmt.Println(res)
	fmt.Println(string(body))

}