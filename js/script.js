// Main function for the code
import { loadFunc } from "./apifetch.js";
import { searchPlanets, searchForm, close, modal, showSolarSystem } from "./declaration.js";

close.addEventListener("click", () => {
  modal.style.display = "none";
  showSolarSystem();
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    showSolarSystem();
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("search");
  searchPlanets();
});

loadFunc();
