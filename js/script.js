// Main function for the code
import { loadFunc } from "./apifetch.js";
import { searchPlanets, searchForm } from "./declaration.js";


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("search");
    searchPlanets();
  });

loadFunc();
