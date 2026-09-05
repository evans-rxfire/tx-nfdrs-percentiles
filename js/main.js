const locationToggle = document.getElementById("location-toggle");

const generalLocationFieldset = document.getElementById("general-location");
const countyList = document.getElementById("county-list");
const countyInput = document.getElementById("county-input");

const specificLocationFieldset = document.getElementById("specific-location");
const latitudeInput = document.getElementById("latitude-input");
const longitudeInput = document.getElementById("longitude-input");

const submitButton = document.getElementById("submit-button");


specificLocationFieldset.disabled = true;


texasCounties.forEach(county => {
    const option = document.createElement("option");
    option.value = county;
    option.label = county;
    countyList.appendChild(option);
});


// Functions


// Event Listeners

locationToggle.addEventListener("change", () => {
    if (locationToggle.checked) {
        console.log("Location toggle checked, specific search enabled.");

        generalLocationFieldset.disabled = true;
        specificLocationFieldset.disabled = false;
    } else {
        console.log("Location toggle not checked, general search enabled.");

        generalLocationFieldset.disabled = false;
        specificLocationFieldset.disabled = true;
    }
});


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    console.log("Submit button clicked.");
    console.log(countyInput.value);
});


