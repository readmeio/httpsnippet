use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let form = reqwest::multipart::Form::new()
        .text("", "");

    let client = reqwest::Client::new();
    let response = client.post(url)
        .multipart(form)
        .send()
        .await;

    let results = response.unwrap()
        .json::<serde_json::Value>()
        .await
        .unwrap();

    println!("{}", results);
}
