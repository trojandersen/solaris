import {apiKey} from "./apikeys.js";
const baseURL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

// Main function which fetches the API
async function fetchAPI() {
  try {
    const resp = await fetch(`${baseURL}/bodies`, {
      method: "GET",
      headers: { "x-zocom": apiKey },
    });
    const { bodies } = await resp.json();
    for (const i of bodies) {
      console.log(i);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchAPI();
