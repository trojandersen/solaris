// In this module we declare & interact with the DOM-elements
export { searchPlanets, searchForm };

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
  const searchTerm = searchInput.value.trim().toLowerCase();
  let found = false; // Flag to check if any planet was found
  planetID.forEach((id) => {
    solarSystem[id].classList.add("planet--hidden");
    solarSystem[id].classList.remove("planet--focus-large", "planet--focus-small");
  });
  planetID.forEach((id) => {
    if (id === searchTerm) {
      // If the searchTerm finds a planet/star, we will focus it and show it and set found to true
      solarSystem[id].classList.remove("planet--hidden");
      found = true;
      if (searchTerm !== "sun") {
        solarSystem[id].classList.add("planet--focus-large");
        if (searchTerm !== "jupiter" && searchTerm !== "saturnus" ) {
          solarSystem[id].classList.add("planet--focus-small")
        }
      }
    }
  });
  // Show error message if no planets/star is found, and show all planets/star if any have the hidden tag
  if (!found) {
    alert("No star or planet found! Please enter a valid name.");
    planetID.forEach((id) => {
      if (solarSystem[id].classList.contains("planet--hidden")) {
        solarSystem[id].classList.remove("planet--hidden");
      }
    });
  }
}
