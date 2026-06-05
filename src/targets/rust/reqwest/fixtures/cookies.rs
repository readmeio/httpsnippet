use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/cookies";

    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert("cookie", "foo=bar; bar=baz".parse().unwrap());

    let client = reqwest::Client::new();
    let response = client.get(url)
        .headers(headers)
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    dbg!(results);
}
