// Main function for the code
import { fetchAPI } from "./apifetch.js";
import { searchPlanets, searchForm } from "./declaration.js";


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("search");
    searchPlanets();
  });

fetchAPI();
