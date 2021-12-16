//VARIABLES:
const key = config.SECRETKEY;
const keytwo = config.SECRETKEY2;
const searchBtn = $("#search-button");
const searchHistory = $("#search-history");
const currentWeather = $("#current-weather");
const airQuaility = $("#air-quality");


//============= Geocoding API ============= 
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
    console.log(weatherURL);
    fetch(weatherURL)
        .then (response => {
            response.json().then((weatherdata) => { 
                showWeather(weatherdata);
                fetchPollution(coordinates);
            });
        });
};

//============AIR Pollution API ===============
function fetchPollution(coordinates) {
    let pollURL = "http://api.airvisual.com/v2/nearest_city?lat=" + coordinates[0].lat + "&lon=" + coordinates[0].lon + "&key=" + keytwo;
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
        $(airQuaility).empty();
        console.log(airPollution);
        let alertColor = $("#alert-color");
        if (airPollution < 50) {
            $(alertColor).attr("class","message is-success");
        } else if (airPollution > 50 && airPollution < 101) {
            $("#alert-color").attr("class", "message is-warning");
        } else if (airPollution > 150 && airPollution < 201) {
            $("#alert-color").attr("class", "message is-warning");
        } else if (airPollution > 200 && airPollution < 301 ) {
            $("#alert-color").attr("class", "message is-danger");
        } else if (airPollution > 300) {
            $("#alert-color").attr("class", "message is-dark");
        };
        $(airQuaility).append("<a>" + airPollution + "</a>");
                
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
}
//===============display history================
function showHistory (searchHistory) {
    searchHistory.html = "";
    $(searchHistory).empty();

    for(let i=1; i < searchHistory.length; i++) {
        let historyButton = $("<a>" + JSON.stringify(searchHistory[i]) + "</a>")
        $(historyButton).text(searchHistory[i]).addClass("button is-link is-light block").attr("href");
        $(searchHistory).append(historyButton);
    };
};


//==================search button listener===================
$(searchBtn).on("click", function(event) {
    event.preventDefault();

    let citySe = $("#city-input").val();
    if (citySe === "") {
        return;
    }
    
    pullCoord(citySe);

    //storage
    searchHistory.push(citySe);
    localStorage.setItem(searchHistory, JSON.stringify(searchHistory));
    showHistory(searchHistory);

    $("#city-input").val("");
});

//==========history button click listener ===============
$("#search-history").on("click", ".button", function() {
    let historicalCity = $(this).text();
    console.log(historicalCity);
    pullCoord(historicalCity);
})


