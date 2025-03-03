// Sample countries for the map
const countries = {
  germany: { name: "Germany", military: 10 },
  france: { name: "France", military: 12 },
  poland: { name: "Poland", military: 8 },
  russia: { name: "Russia", military: 15 },
  italy: { name: "Italy", military: 6 },
  austria: { name: "Austria", military: 4 },
  spain: { name: "Spain", military: 5 },
  portugal: { name: "Portugal", military: 3 },
  belgium: { name: "Belgium", military: 4 },
  switzerland: { name: "Switzerland", military: 2 },
  czechia: { name: "Czechia", military: 3 },
  netherlands: { name: "Netherlands", military: 7 }
};

let selectedCountry = null;

// Render countries on the map
const map = document.getElementById('map');
Object.keys(countries).forEach(countryId => {
  const countryElement = document.getElementById(countryId);
  countryElement.innerText = countries[countryId].name;
  countryElement.addEventListener('click', () => {
    selectedCountry = countries[countryId];
    highlightSelectedCountry(countryElement);
  });
});

// Highlight selected country
function highlightSelectedCountry(countryElement) {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => country.style.backgroundColor = '#e6e6e6');
  countryElement.style.backgroundColor = '#b3b3b3';
}

// Handle the start of the game
document.getElementById('startGame').addEventListener('click', () => {
  alert('Game started!');
  // Additional game start logic goes here
});

// Handle attack button
document.getElementById('attackButton').addEventListener('click', () => {
  if (selectedCountry) {
    alert(`Attacking from ${selectedCountry.name}`);
    // Add attack logic here
  } else {
    alert('Please select a country to attack from!');
  }
});
