// Stated Variables
let destinationEl = document.querySelector("#city-input");
let searchButtonEl = document.querySelector("#search-button");
let searchHistoryEl = document.querySelector("#search-history");
let currentWeatherEl = document.querySelector("#current-weather");
let airQualityEl = document.querySelector("#air-quality"); 


// Function to grab the search information 
let destinationSearch = (event) => {
  // Will prevent the page from refreshing every time the "Search" is clicked
  event.preventDefault();
  let destination = destinationEl.value.trim();
  console.log(destination);
  // If statement will clear after the input triggers event listener, and will also notify the user if they enter nothing
  if (destination) {
    fetchWeather(destination);
    destinationEl.value = "";
  } else {
    // I will replace this with a modal
    //alert("Please enter a valid city")
  }
};

//API Variables
//var token = config.MY_API_TOKEN;
//var key = config.SECRET_API_KEY;


//============FETCH OPEN WEATHER API DATA ===============
function fetchWeather(city) {
    const weatherURL ="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=425535dc025827a7e77aa8a4d5289d87";
     
    fetch(weatherURL)
    .then(response => {
        if (response.ok) {
            console.log(response);
            response.json().then((data) => {
                console.log(data);
            })
        }
    });


}




searchButtonEl.addEventListener("submit", destinationSearch);