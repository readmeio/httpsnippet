use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let querystring = [
        ("startTime", "2019-06-13T19:08:25.455Z"),
        ("endTime", "2015-09-15T14:00:12-04:00"),
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

    println!("{}", results);
}
