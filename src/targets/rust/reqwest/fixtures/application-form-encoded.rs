use serde_json::json;
use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let payload = json!({
        "foo": "bar",
        "hello": "world"
    });

    let client = reqwest::Client::new();
    let response = client.post(url)
        .header("content-type", "application/x-www-form-urlencoded")
        .form(&payload)
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    println!("{}", results);
}
