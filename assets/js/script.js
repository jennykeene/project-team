//VARIABLES:


//Covid Cases API 
testURL = "https://covid-api.mmediagroup.fr/v1/cases?country=Germany";

fetch(testURL)
.then(response => {
    if (response.ok) {
        console.log(response);
        response.json().then((data) => {
            console.log(data);
        })
    }
});



//============FETCH OPEN WEATHER API DATA ===============
function getOpenWeather () {
    let weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";



let newURL = "https://api.roadgoat.com/api/v2/destinations/auto_complete?q=chicago"
fetch(newURL, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));