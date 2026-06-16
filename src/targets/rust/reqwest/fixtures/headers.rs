use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/headers";

    let client = reqwest::Client::new();
    let response = client.get(url)
        .header("accept", "application/json")
        .header("x-foo", "Bar")
        .header("x-bar", "Foo")
        .header("quoted-value", "\"quoted\" 'string'")
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    println!("{}", results);
}
