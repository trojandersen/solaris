// In this module we declare & interact with the DOM-elements
export { searchPlanets, searchForm, planetInfoElements, planetID };

const planetID = [
  "sun",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturnus",
  "uranus",
  "neptunus",
];

const solarSystem = document.querySelector("#solar-system");

planetID.forEach((id) => {
  solarSystem[id] = document.querySelector(`#${id}`);
});

const planetInfoElements = {
  planetName: document.querySelector("#planet-name"),
  planetLatin: document.querySelector("#planet-latin"),
  planetDescription: document.querySelector("#planet-description"),
  planetCircumference: document.querySelector("#planet-circumference"),
  planetDistance: document.querySelector("#planet-distance"),
  planetMinTemp: document.querySelector("#planet-min-temp"),
  planetMaxTemp: document.querySelector("#planet-max-temp"),
  planetMoons: document.querySelector("#planet-moons"),
};

const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");

function searchPlanets() {
  const planetQuery = searchInput.value.trim().toLowerCase();
  let result = { found : false}; // Flag to check if any planet was found
  showSolarSystem();
  updatePlanetVisibility(planetQuery, result);
  if (!result.found) {
    alert("No star or planet found! Please enter a valid name.");
    showSolarSystem();
  }
}

function showSolarSystem() {
  planetID.forEach((id) => {
    solarSystem[id].classList.remove("planet--hidden");
    solarSystem[id].classList.remove("planet--focus-large");
    solarSystem[id].classList.remove("planet--focus-small");
  });
}

function updatePlanetVisibility(planetQuery, result) {
  planetID.forEach((id) => {
    solarSystem[id].classList.add("planet--hidden");
  });
  planetID.forEach((id) => {
    if (id === planetQuery) {
      // If the planetQuery finds a planet/star, we set found to true and will focus & show the planet/star
      result.found = true;
      solarSystem[id].classList.remove("planet--hidden");
      if (planetQuery !== "sun") {
        if (planetQuery !== "jupiter" && planetQuery !== "saturnus") {
          solarSystem[id].classList.add("planet--focus-small");
        } else {
          solarSystem[id].classList.add("planet--focus-large");
        }
      }
    }
  });
}
