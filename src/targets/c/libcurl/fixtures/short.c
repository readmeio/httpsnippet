CURL *hnd = curl_easy_init();

curl_easy_setopt(hnd, CURLOPT_CUSTOMREQUEST, "GET");
<<<<<<< HEAD
curl_easy_setopt(hnd, CURLOPT_URL, "https://httpbin.org/anything");
=======
curl_easy_setopt(hnd, CURLOPT_URL, "http://mockbin.com/har");
>>>>>>> upstream/master

CURLcode ret = curl_easy_perform(hnd);