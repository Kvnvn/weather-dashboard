
var currentWeatherView = $("#currentWeather");
var searchCities = "Mammoth Lakes";
var apiKeyParam = "appid=0c18dc71f2179d55a217164f2d1005e6";
var unitsFormat = "units-imperial";

//when dumpcurrent weather happens it should take api and store it 
//current weather data should correspond to things we are looking for
function dumpCurrentWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Mammoth Lakes&" + unitsFormat + "&" + apiKeyParam;
   
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        currentWeatherView.text(JSON.stringify(response, null, 2));
        var currentWeatherData = {
            cityName: response.name,
            unixTime: response.dt,
            iconId: getWeatherIconFromId(response.weather[0].icon),
            temperature: response.main.temp,
            humidityPercent: response.main.humidity,
            windSpeedMetersSec: response.wind.speed,
            Location:response.coord,
        };
        console.log(currentWeatherData)
    });
}
//in dump data it should take api source and place in storage 
//use JSON stringify to "pretty print"
function dumpUvData(){
    var location = {lon: -118.97, lat: 37.65};
    var queryURL=
    "https://api.openweathermap.org/data/2.5/uvi?lat="+ 
    location.lat + 
    "&lon=" +
    location.lon +
    "&" + apiKeyParam;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        currentWeatherView.text(JSON.stringify(response, null, 2));
    });  
}


//dumpUvData();
//dumpCurrentWeather();
//dump5DayForecastData();
