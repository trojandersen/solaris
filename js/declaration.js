// In this module we declare & interact with the DOM-elements

const planetIds = ["sun", "mercury", "venus", "earth", "mars", "jupiter", "saturnus", "uranus", "neptunus"];
const planetElements = {};

planetIds.forEach(index => {
    planetElements[index] = document.querySelector(`#${id}`);
});

const {
    sun: sunEle,
    mercury: mercuryEle,
    venus: venusEle,
    earth: earthEle,
    mars: marsEle,
    jupiter: jupiterEle,
    saturnus: saturnusEle,
    uranus: uranusEle,
    neptunus: neptunusEle
} = planetElements;

const planetInfoElements = {
    planetName: document.querySelector("#planet-name"),
    planetLatin: document.querySelector("#planet-latin"),
    planetDescription: document.querySelector("#planet-description"),
    planetCircumference: document.querySelector("#planet-circumference"),
    planetDistance: document.querySelector("#planet-distance"),
    planetMinTemp: document.querySelector("#planet-min-temp"),
    planetMaxTemp: document.querySelector("#planet-max-temp"),
    planetMoons: document.querySelector("#planet-moons")
};
