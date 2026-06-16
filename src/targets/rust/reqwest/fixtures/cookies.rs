use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/cookies";

    let client = reqwest::Client::new();
    let response = client.get(url)
        .header("cookie", "foo=bar; bar=baz")
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    println!("{}", results);
}
