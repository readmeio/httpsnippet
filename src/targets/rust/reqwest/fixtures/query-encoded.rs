use reqwest;

#[tokio::main]
pub async fn main() {
    let url = "https://httpbin.org/anything";

    let querystring = [
        ("startTime", "2019-06-13T19%3A08%3A25.455Z"),
        ("endTime", "2015-09-15T14%3A00%3A12-04%3A00"),
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
