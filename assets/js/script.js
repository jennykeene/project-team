//VARIABLES:
var token = config.MY_API_TOKEN;
var key = config.SECRET_API_KEY;

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
