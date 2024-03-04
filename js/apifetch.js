// this module interacts with the API to to make a post request for an API key and then fetch the data using a get request
// tried to use both async try and fetch.then
export { fetchAPI };

const baseURL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

const fetchAPI = () => {
  let apiKey = "";

  fetch(`${baseURL}/keys`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      apiKey = data;
      console.log(apiKey.key);
    })
    .then(() => {
      fetchData(apiKey.key);
    })
    .catch((error) => {
      console.error("Error occured while fetching the API:", error);
    });
};

async function fetchData(key) {
  try {
    const resp = await fetch(`${baseURL}/bodies`, {
      method: "GET",
      headers: { "x-zocom": key },
    });
    const { bodies } = await resp.json();
    for (const i of bodies) {
      console.log(i);
    }
  } catch (error) {
    console.error("Error occured while fetching data: ", error);
  }
}
