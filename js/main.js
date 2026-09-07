const weatherForm = document.getElementById("weather-form");

const locationToggle = document.getElementById("location-toggle");

const generalLocationFieldset = document.getElementById("general-location");
const countyList = document.getElementById("county-list");
const countyInput = document.getElementById("county-input");

const specificLocationFieldset = document.getElementById("specific-location");
const latitudeInput = document.getElementById("latitude-input");
const longitudeInput = document.getElementById("longitude-input");

// const submitButton = document.getElementById("submit-button");

const outputContainer = document.getElementById("output-container"); 
const stationLinkContainer = document.getElementById("station-link-container"); 
const graphLinkContainer = document.getElementById("graph-link-container");

specificLocationFieldset.disabled = true;


texasCounties.forEach(county => {
    const option = document.createElement("option");
    option.value = county;
    option.label = county;
    countyList.appendChild(option);
});


// Functions

// General location (County) search

function getPSAByCounty(county) {
    return predictiveServiceAreas.find(p => 
        p.PSAcounties.includes(county)
    );
}


// Rendering to the HTML

function renderPercentiles(index) {
    const percentileCard = document.createElement("div");
    percentileCard.className = "border border-zinc-300 dark:border-zinc-600 rounded-md p-4";

    percentileCard.innerHTML = `
        <p class="font-semibold text-center">${index.name}</p>
        <p><span class="font-semibold text-red-600">3rd:</span> ${index.thirdPercentile}</p>
        <p><span class="font-semibold text-yellow-600">10th:</span> ${index.tenthPercentile}</p>
        <p><span class="font-semibold text-blue-600">25th:</span> ${index.twentyFifthPercentile}</p>
        <p><span class="font-semibold text-green-600">50th:</span> ${index.fiftiethPercentile}</p>
    `;

    return percentileCard;
}

function renderPSAIndices( county, psa, indices) {
    const PSAContainer = document.createElement("div");
    PSAContainer.className = "border border-zinc-300 dark:border-zinc-600 rounded-md p-4";
    
    const PSATitle = document.createElement("h3");
    PSATitle.className = "text-center text-lg mb-4";
    PSATitle.textContent = `County: ${county}, PSA: ${psa}`;

    PSAContainer.appendChild(PSATitle);

    const cardContainer = document.createElement("div");
    cardContainer.className = "flex flex-wrap justify-center gap-4";

    indices.forEach(index => {
        const card = renderPercentiles(index);
        cardContainer.appendChild(card);
    });

    PSAContainer.appendChild(cardContainer);

    outputContainer.appendChild(PSAContainer);
}


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


weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    outputContainer.innerHTML = "";
    
    console.log("Form submitted.");
    console.log("County:", countyInput.value);

    const psa = getPSAByCounty(countyInput.value);

    if (!psa) {
        // handle invalid county
        return;
    }

    console.log("PSA:", psa.PSAname);
    
    renderPSAIndices(countyInput.value, psa.PSAname, psa.fireDangerIndices);
});


