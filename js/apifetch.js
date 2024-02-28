// this module interacts with the API to fetch our data from the backend

import {apiKey} from "./apikeys.js";
export {fetchAPI};

const baseURL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";

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
