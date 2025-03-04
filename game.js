document.querySelectorAll('.country').forEach(button => {
    button.addEventListener('click', function() {
        let countryName = this.innerText;
        document.getElementById("country-info").innerText = "You selected " + countryName;
    });
});

document.getElementById("attackButton").addEventListener("click", function() {
    alert("Attack not implemented yet!");
});
