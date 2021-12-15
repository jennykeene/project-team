<<<<<<< HEAD
//VARIABLES:
const key = "425535dc025827a7e77aa8a4d5289d87";
const searchBtn = $("#searchBtn");
const searchHistory = $("#searchHistory");
const currentWeather = $("#currentWeather");
const airQuaility = $("#air-quality");

//============= Geocoding API ============= 
=======



const key = "425535dc025827a7e77aa8a4d5289d87";
const searchBTN = $("#searchBtn");
const searchHistory = $("#searchHistory");
const currentWeather = $("#currentWeather");

// fetch coordinates from city name input using Geocoding API 
>>>>>>> feature/arnold
function pullCoord(citySe) {
    let geoapiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySe + "&limit=1&appid=" + key;
    fetch(geoapiURL)
        .then(response => {
            response.json().then((coordinates) => { 
                fetchWeather(coordinates);
            });
        });
};
//============FETCH OPEN WEATHER API DATA ===============
function fetchWeather(coordinates) {
    let latitude = coordinates[0].lat;
    let longitude = coordinates[0].lon;
    const weatherURL ="http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + key;
     
    fetch(weatherURL)
        .then (response => {
            response.json().then((weatherdata) => { 
                showWeather(weatherdata);
<<<<<<< HEAD
                fetchPollution(coordinates);
=======
>>>>>>> feature/arnold
            });
        });
};

<<<<<<< HEAD
//============AIR Pollution API ===============
function fetchPollution(coordinates) {
    let pollURL = "http://api.airvisual.com/v2/nearest_city?lat=" + coordinates[0].lat + "&lon=" + coordinates[0].lon + "&key=53a550e6-2551-42f3-a95a-52e90dea9811";
    console.log(pollURL);
    fetch(pollURL) 
        .then (response => { 
            response.json().then((pollution) => {
                showPollution(pollution);
            });
        });
};

function showPollution(pollution) {
    let airPollution = pollution.data.current.pollution.aqius; 
   
                
    console.log(airPollution);
}
//===========show weather =================
function showWeather (weatherdata) {
    $(currentWeather).empty();
    $(currentWeather).append("<p>" + weatherdata.name + "</p");
    $(currentWeather).append("<p>" + "Temp: " + JSON.stringify(weatherdata.main.temp) + "&deg F" + "</p>");
    $(currentWeather).append("<p>" + "Feels like: " + weatherdata.main.feels_like + "&deg" + "F" + "</p>");
    $(currentWeather).append("<p>" + "Wind: " + JSON.stringify(weatherdata.wind.speed) + " MPH" + "</p>");
    $(currentWeather).append("<p>" + "Humidity: " + JSON.stringify(weatherdata.main.humidity) + " %" + "</p>");
=======
//===========show weather =================
function showWeather (weatherdata) {
    $(currentWeather).empty();
    $(currentWeather).append("<p>" + weatherdata.name + "</p");
    $(currentWeather).append("<p>" + "Temp: " + JSON.stringify(weatherdata.main.temp) + "&deg F" + "</p>");
    $(currentWeather).append("<p>" + "Feels like: " + weatherdata.main.feels_like + "&deg" + "F" + "</p>");
    $(currentWeather).append("<p>" + "Wind: " + JSON.stringify(weatherdata.wind.speed) + " MPH" + "</p>");
    $(currentWeather).append("<p>" + "Humidity: " + JSON.stringify(weatherdata.main.humidity) + " %" + "</p>");
}
//===============display history================
function showHistory (searchHistory) {
    searchHistory.html = "";
    $(searchHistory).empty();

    for(let i=1; i < searchHistory.length; i++) {
        let historyButton = $("<a>" + JSON.stringify(searchHistory[i]) + "</a>").addClass("button").attr("href");
        $(searchHistory).append(historyButton);
    }
>>>>>>> feature/arnold
}
//===============display history================
function showHistory (searchHistory) {
    searchHistory.html = "";
    $(searchHistory).empty();

    for(let i=1; i < searchHistory.length; i++) {
        let historyButton = $("<a>" + JSON.stringify(searchHistory[i]) + "</a>")
        $(historyButton).text(searchHistory[i]).addClass("button is-link is-light").attr("href");
        $(searchHistory).append(historyButton);
    }
}


//==================search button listener===================
$(searchBtn).on("click", function(event) {
    event.preventDefault();

    let citySe = $("#cityInput").val();
    if (citySe === "") {
        return;
    }
    
    pullCoord(citySe);

    //storage
    searchHistory.push(citySe);
    localStorage.setItem(searchHistory, JSON.stringify(searchHistory));
    showHistory(searchHistory);

    $("#cityInput").val("");
});

//==========history button click listener ===============
$("#searchHistory").on("click", ".button", function() {
    let historicalCity = $(this).text();
    console.log(historicalCity);
    pullCoord(historicalCity);
})

//==================search button listener===================
$(searchBTN).on("click", function(event) {
    event.preventDefault();

    let citySe = $("#cityInput").val();
    if (citySe === "") {
        return;
    }
    
    pullCoord(citySe);

    //storage
    searchHistory.push(citySe);
    localStorage.setItem(searchHistory, JSON.stringify(searchHistory));
    showHistory(searchHistory);

    $("#cityInput").val("");
})

