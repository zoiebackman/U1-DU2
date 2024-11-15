// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements
const cityTitle = document.querySelector("h2");
const cityDetails = document.querySelector("h3");
const cityClosest = document.querySelector("#closest");
const cityFurthest = document.querySelector("#furthest");
const cityBox = document.querySelector("#cities");
const cityTable = document.querySelector("#table");
const title = document.querySelector("title");
// Recommended: Ask for the city name and then the rest of the code

const vilkenCity = prompt("skriv en stad?");

let cityWasFound = false;
for (cityKey in cities) {
    if (vilkenCity == cities[cityKey.name]) {
        cityWasFound = true;
        cityTitle.innerHTML += `${vilkenCity} (${cities[cityKey].country})`;
        tabName.innerHTML = enteredCity;
        break; // loopen slutar och behöver inte fortsätta
    }
}
if (cityWasFound == false) {
    cityTitle.innerHTML += vilkenCity + " finns inte i databasen";
    cityDetails.innerHTML = "";
    tabName.innerHTML = "Not Found";
}

