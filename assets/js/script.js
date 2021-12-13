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

}

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic ZTdlNjRlNGE4MjUxZjI3OWMyZmU2NWZlYjZkYTJhNTI6YmM4Y2E5ODBkMDliN2Y3ZjgwOTc5MjgzOTAyNzFkYzk=");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let newURL = "https://api.roadgoat.com/api/v2/destinations/auto_complete?q=chicago"
fetch(newURL, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));