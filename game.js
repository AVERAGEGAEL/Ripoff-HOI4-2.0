// Sample countries for the map with initial stats
const countries = {
  germany: { name: "Germany", military: 10, resources: { steel: 100, food: 50 }, controlled: true },
  france: { name: "France", military: 12, resources: { steel: 60, food: 70 }, controlled: false },
  poland: { name: "Poland", military: 8, resources: { steel: 40, food: 60 }, controlled: false },
  russia: { name: "Russia", military: 15, resources: { steel: 80, food: 50 }, controlled: false },
  italy: { name: "Italy", military: 6, resources: { steel: 50, food: 30 }, controlled: false },
  austria: { name: "Austria", military: 4, resources: { steel: 30, food: 40 }, controlled: false },
  spain: { name: "Spain", military: 5, resources: { steel: 40, food: 60 }, controlled: false },
  portugal: { name: "Portugal", military: 3, resources: { steel: 20, food: 50 }, controlled: false },
  belgium: { name: "Belgium", military: 4, resources: { steel: 30, food: 40 }, controlled: false },
  switzerland: { name: "Switzerland", military: 2, resources: { steel: 20, food: 30 }, controlled: false },
  czechia: { name: "Czechia", military: 3, resources: { steel: 25, food: 40 }, controlled: false },
  netherlands: { name: "Netherlands", military: 7, resources: { steel: 50, food: 40 }, controlled: false }
};

let selectedCountry = null;

// Check if all country divs exist before adding event listeners
const map = document.getElementById('map');
Object.keys(countries).forEach(countryId => {
  const countryElement = document.getElementById(countryId);
  if (countryElement) {
    countryElement.innerText = countries[countryId].name;
    countryElement.addEventListener('click', () => {
      selectedCountry = countries[countryId];
      highlightSelectedCountry(countryElement);
      renderStats(selectedCountry);
    });
  }
});

// Highlight selected country
function highlightSelectedCountry(countryElement) {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => country.classList.remove('selected'));
  countryElement.classList.add('selected');
}

// Render country stats in the sidebar
function renderStats(country) {
  const statsDiv = document.getElementById('stats');
  statsDiv.innerHTML = `
    <h3>${country.name} Stats</h3>
    <p>Military: ${country.military}</p>
    <p>Steel: ${country.resources.steel}</p>
    <p>Food: ${country.resources.food}</p>
    <p>Status: ${country.controlled ? 'Controlled by You' : 'Not Controlled'}</p>
  `;
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
    performAttack(selectedCountry);
  } else {
    alert('Please select a country to attack from!');
  }
});

// Perform an attack between selected country and a neighboring one
function performAttack(attackingCountry) {
  const attackingPower = attackingCountry.military;
  const defendingCountry = countries.france; // Hardcoded for example, you can add logic for selecting a neighboring country

  if (attackingPower >= defendingCountry.military) {
    defendingCountry.controlled = true;
    defendingCountry.military = 0;
    alert(`${attackingCountry.name} has successfully conquered ${defendingCountry.name}!`);
    updateMap();
  } else {
    alert(`${attackingCountry.name} failed to conquer ${defendingCountry.name}.`);
  }
}

// Update map after attack
function updateMap() {
  Object.keys(countries).forEach(countryId => {
    const countryElement = document.getElementById(countryId);
    if (countries[countryId].controlled) {
      countryElement.classList.add('controlled');
    }
  });
}
