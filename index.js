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
//prompt
const enteredCity = prompt("skriv en stad?");

let cityWasFound = false;
for (cityKey in cities) {
    if (enteredCity == cities[cityKey].name) {
        cityWasFound = true;
        cityTitle.innerHTML += `${enteredCity} (${cities[cityKey].country})`;
        title.innerHTML = enteredCity;
        break; // loopen slutar och behöver inte fortsätta
    }
}
if (cityWasFound == false) {
    cityTitle.innerHTML += enteredCity + " finns inte i databasen";
    cityDetails.innerHTML = "";
    tabName.innerHTML = "Not Found";
}

// skriver ut ALLA cityrader
for ( let i = 0; i <= 38; i++) {
    let cityBoxP = document.createElement("p");
    cityBoxP.classList.add("cityBox");
    cityBoxP.textContent = cities[i].name;
    cityBox.appendChild(cityBoxP);

    if (enteredCity == cities[i].name) {
        cityBoxP.classList.add("target");
    }
}

/* grid system */
cityTable.style.gridTemplateRows = "repeat(39, 1fr)";
for (let i = 0; i <= 39; i++) {
    for (let j = 0; j <= 39; j++) {
        let cell = document.createElement("div")
        cell.textContent = i;
        cityTable.appendChild(cell);
    }
    
}
//loop

//grid
//h2 ändras utifrån stad
//h2 ska försvinna vid en icke databaserad stad
//h3 ska ändras vid rätt och fel stad
//funktion