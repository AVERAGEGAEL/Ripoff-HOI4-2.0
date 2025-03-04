// Define country stats in an object
const countryStats = {
    germany: {
        name: "Germany",
        population: "83 million",
        economy: "Strong",
        military: "Advanced"
    },
    france: {
        name: "France",
        population: "67 million",
        economy: "Stable",
        military: "Moderate"
    },
    poland: {
        name: "Poland",
        population: "38 million",
        economy: "Developing",
        military: "Moderate"
    },
    italy: {
        name: "Italy",
        population: "60 million",
        economy: "Moderate",
        military: "Moderate"
    },
    uk: {
        name: "United Kingdom",
        population: "67 million",
        economy: "Strong",
        military: "Advanced"
    },
    spain: {
        name: "Spain",
        population: "47 million",
        economy: "Stable",
        military: "Moderate"
    },
    russia: {
        name: "Russia",
        population: "145 million",
        economy: "Strong",
        military: "Advanced"
    }
};

// Get all country buttons and the country info area
const countryButtons = document.querySelectorAll('.country');
const countryInfo = document.getElementById('country-info');

// Add event listeners to each country button
countryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const countryId = button.id; // Get the country id from the button
        const stats = countryStats[countryId]; // Get the country stats from the object

        // Display the country stats
        countryInfo.innerHTML = `
            <strong>${stats.name}</strong><br>
            Population: ${stats.population}<br>
            Economy: ${stats.economy}<br>
            Military: ${stats.military}
        `;
    });
});

// Handle the "Attack" button click
document.getElementById('attackButton').addEventListener('click', () => {
    const selectedCountry = document.querySelector('.country.selected');
    if (selectedCountry) {
        const countryId = selectedCountry.id;
        alert(`You are attacking ${countryId}!`);
    } else {
        alert("Select a country to attack!");
    }
});
