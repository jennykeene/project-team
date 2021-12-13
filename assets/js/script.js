//VARIABLES:
var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;


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




