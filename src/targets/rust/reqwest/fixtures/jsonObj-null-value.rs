use serde_json::json;
use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let payload = json!({"foo": json!(null)});

    let client = reqwest::Client::new();
    let response = client.post(url)
        .header("content-type", "application/json")
        .json(&payload)
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    println!("{}", results);
}
