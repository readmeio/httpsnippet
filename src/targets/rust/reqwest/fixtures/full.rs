use serde_json::json;
use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let querystring = [
        ("foo", "bar"),
        ("foo", "baz"),
        ("baz", "abc"),
        ("key", "value"),
    ];

    let payload = json!({"foo": "bar"});

    let client = reqwest::Client::new();
    let response = client.post(url)
        .query(&querystring)
        .header("cookie", "foo=bar; bar=baz")
        .header("accept", "application/json")
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
