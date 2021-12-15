const cityInp = document.querySelector("#cityInput")
const airQuality = document.querySelector(".air-quality")
const airQualityStat = document.querySelector(".air-quality-status")
const srchBtn = document.querySelector("#searchBtn")
const componentsEle = document.querySelector(".components-val")

const appId = "7699f9ab357e9ad46e48cd323ec8d652"
const link = "https://api.openweathermaps.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={7699f9ab357e9ad46e48cd323ec8d652}"


function pullCoord(citySe) {
    let geoapiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySe + "&limit=1&appid=" + key;
    fetch(geoapiURL)
        .then(response => {
            response.json().then((coordinates) => { 
                fetchWeather(coordinates);
            });
        });

        getAirQuality(lat, lon)
     const getAirQuality  = async (lat, lon) => {
         const rawdata = await fetch('${link}?lat=${lat&lon={lon}&appid=${appId}')}
         const airData = await rawData.json()

         console.log(airData)
        setValuesOfAir(airData)
    setComponentsOfAir(airData) 
}

        const setValuesOfAir = airData => {
            const aqi =airData.list[0].main.aqi
             let airStat="",color=""
             airQuality.innerText = aqi
             switch (aqi) {
                 case 1:
                     airStat ="good"
                     color = "rgb(19, 201, 28)"
                     break
                     case 2: 
                     airStat ="Fair"
                     color ="rgb(15, 134, 25) "
                     break
                     case 3: 
                     airStat ="moderate"
                     color ="rgb(201, 204, 13) "
                     break
                     case 4: 
                     airStat ="poor"
                     color ="rgb(204, 83, 13) "
                     break
                     case 5: 
                     airStat ="very poor"
                     color ="rgb(204, 13, 13) "
                     break
                     default : "uknown"
             }
             airQualityStat.innerText = airStat
            airQualityStat.style.color = color
            const setComponentsOfAir = airData => {
                let component = air { ...airData.list[0].components}
                componentsEle.forEach(ele =>{ const attr =ele.getAttriubute('data-comp')})
            ele.innerText = component[attr] += 'Ü '}
//=============button
            $(searchBTN).on("click", function(event) {
                event.preventDefault();
            
                let citySe = $("#cityInput").val();
                if (citySe === "") {
                    get airQuality(lat, lon);
                }
                
                pullCoord(citySe);
            
        }
//test