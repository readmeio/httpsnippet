use serde_json::json;
use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let payload = json!({
        "number": 1,
        "string": "f\"oo",
        "arr": (1, 2, 3),
        "nested": json!({"a": "b"}),
        "arr_mix": (1, "a", json!({"arr_mix_nested": json!([])})),
        "boolean": false
    });

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
