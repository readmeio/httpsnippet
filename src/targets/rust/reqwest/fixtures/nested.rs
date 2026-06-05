use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let querystring = [
        ("foo[bar]", "baz,zap"),
        ("fiz", "buz"),
        ("key", "value"),
    ];

    let client = reqwest::Client::new();
    let response = client.get(url)
        .query(&querystring)
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    dbg!(results);
}
