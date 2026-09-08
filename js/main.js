const weatherForm = document.getElementById("weather-form");

const locationToggle = document.getElementById("location-toggle");

const generalLocationFieldset = document.getElementById("general-location");
const countyList = document.getElementById("county-list");
const countyInput = document.getElementById("county-input");

const specificLocationFieldset = document.getElementById("specific-location");
const latitudeInput = document.getElementById("latitude-input");
const longitudeInput = document.getElementById("longitude-input");

// const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");

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

// Data validation

function validateWeatherStations() {
    const requiredProperties = [
        "stationName",
        "stationId",
        "stationLatitude",
        "stationLongitude",
        "predictiveServiceArea",
        "stationCounty",
        "stationNetwork",
        "stationUrl",
        "fireDangerIndices"
    ];

    const expectedIndices = [
        "10hr FM",
        "100hr FM",
        "1000hr FM",
        "BI",
        "ERC"
    ];

    const percentileProperties = [
        "fiftiethPercentile",
        "twentyFifthPercentile",
        "tenthPercentile",
        "thirdPercentile"
    ];

    weatherStations.forEach((station, index) => {
        requiredProperties.forEach(property => {
            if (!(property in station)) {
                console.error(
                    `Station ${index} (${station.stationName ?? "unknown"}): missing ${property}`
                );
            }
        });

        if (!Array.isArray(station.fireDangerIndices)) {
            console.error(
                `Station ${station.stationName}: fireDangerIndices is missing or is not an array.`
            );
            return;
        }

        expectedIndices.forEach(expectedIndex => {
            const index = station.fireDangerIndices.find(
                item => item.name === expectedIndex
            );

            if (!index) {
                console.error(
                    `Station ${station.stationName}: missing index "${expectedIndex}".`
                );
                return;
            }

            percentileProperties.forEach(property => {
                if (!(property in index)) {
                    console.error(
                        `Station ${station.stationName}, ${expectedIndex}: missing ${property}.`
                    );
                } else if (typeof index[property] !== "number") {
                    console.error(
                        `Station ${station.stationName}, ${expectedIndex}: ${property} is not a number.`
                    );
                }
            });
        });
    });
}

// validateWeatherStations();


// General location (County) search

function getPSAByCounty(county) {
    const normalizedCounty = county.trim().toLowerCase();

    return predictiveServiceAreas.find(psa => 
        psa.PSAcounties.some(psaCounty => 
            psaCounty.toLowerCase() === normalizedCounty
        )
    );
}


function getStationsByCounty(county) {
    const normalizedCounty =  county.trim().toLowerCase();

    return weatherStations.filter(station => 
        station.stationCounty.toLowerCase() === normalizedCounty
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
    const locationSection = document.createElement("section");

    const locationTitle = document.createElement("h2");
    locationTitle.className = "text-xl font-semibold border-b border-zinc-300 dark:border-zinc-600 pb-2 m-t4 mb-4"; 
    locationTitle.textContent = "Location Information"; 

    locationSection.appendChild(locationTitle); 

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
    locationSection.appendChild(PSAContainer); 

    outputContainer.appendChild(locationSection);
}


function renderStationIndices(station) {
    const stationContainer = document.createElement("div"); 
    stationContainer.className = "border border-zinc-300 dark:border-zinc-600 rounded-md p-4 mb-4";

    const stationTitle = document.createElement("h3");
    stationTitle.className = "text-center text-lg mb-4";
    stationTitle.textContent = `${station.stationName} Weather Station`; 

    stationContainer.appendChild(stationTitle); 

    const cardContainer = document.createElement("div");
    cardContainer.className = "flex flex-wrap justify-center gap-4";

    station.fireDangerIndices.forEach(index => {
        const card = renderPercentiles(index);
        cardContainer.appendChild(card);
    });

    stationContainer.appendChild(cardContainer); 

    return stationContainer; 
}

function renderCountyStations(county) {
    const stations = getStationsByCounty(county);

    if (stations.length === 0) {
        return; 
    }

    const stationSection = document.createElement("section");

    const stationTitle = document.createElement("h2"); 
    stationTitle.className = "text-xl font-semibold border-b border-zinc-300 dark:border-zinc-600 pb-2 mt-4 mb-4"; 
    stationTitle.textContent = "Weather Stations"; 

    stationSection.appendChild(stationTitle); 

    stations.forEach(station => {
        const stationElement = renderStationIndices(station);
        stationSection.appendChild(stationElement); 
    }); 

    outputContainer.appendChild(stationSection); 
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

    if (locationToggle.checked) {
        // specific location search
        return;
    }
    
    console.log("Form submitted.");
    
    if (countyInput.value.trim() === "") {
        errorMessage.textContent = "Please enter a county.";
        errorMessage.classList.remove("hidden");
        return;
    }

    const psa = getPSAByCounty(countyInput.value);

    if (!psa) {
        errorMessage.textContent = "Please enter a valid Texas county.";
        errorMessage.classList.remove("hidden");
        return;
    }

    const county = psa.PSAcounties.find(
        psaCounty => psaCounty.toLowerCase() === countyInput.value.trim().toLowerCase()
    );

    errorMessage.classList.add("hidden");

    console.log("County:", county);
    console.log("PSA:", psa.PSAname);
    console.log("Stations:", getStationsByCounty(county)); 
    
    renderPSAIndices(county, psa.PSAname, psa.fireDangerIndices);

    renderCountyStations(county);
});


