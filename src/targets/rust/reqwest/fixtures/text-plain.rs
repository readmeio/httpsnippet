use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let payload = "Hello World";

    let client = reqwest::Client::new();
    let response = client.post(url)
        .header("content-type", "text/plain")
        .body(payload)
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    println!("{}", results);
}
