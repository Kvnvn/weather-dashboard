
// var currentWeatherView = $("#currentWeather");
var apiKeyParam = "appid=0c18dc71f2179d55a217164f2d1005e6";


//when dumpcurrent weather happens it should take api and store it 
//current weather data should correspond to things we are looking for
function dumpCurrentWeather(cities) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + "&" + apiKeyParam;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var currentWeatherData = {
            cityName: response.name,
            unixTime: response.dt,
            // iconId: getWeatherIconFromId(response.weather[0].icon),
            temperature: response.main.temp,
            humidityPercent: response.main.humidity,
            windSpeed: response.wind.speed,
            Location:response.coord,
        };
            console.log(currentWeatherData);

            var nameOfCity = $("<h2>").text(currentWeatherData.cityName);
            var currentTemp = $("<p>").text("Temperature: " + (((currentWeatherData.temperature- 273.15) *(9 / 5 ) + 32 ).toFixed(2)) + " F");
            var currentHumidity = $("<p>").text("Humidity: " + currentWeatherData.humidityPercent);
            var currentWindSpeed= $("<p>").text("Wind Speed: " + currentWeatherData.windSpeed);
            //var uvIn = $("<h2>").text(currentWeatherData.);

            $("#weather-body").empty();
            $("#weather-body").append(nameOfCity,currentTemp,currentHumidity,currentWindSpeed);
    });
}
// //in dump data it should take api source and place in storage 
// //use JSON stringify to "pretty print"
// function dumpUvData(response){
//     var queryURL=
//     "https://api.openweathermap.org/data/2.5/uvi?lat="+ 
//     response.lat + 
//     "&lon=" +
//     location.lon +
//     "&" + apiKeyParam;

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         currentWeatherView.text(JSON.stringify(response, null, 2));
//     });  
// }

// function dump5DayForecastData(){
//     // var location = {lon: -118.97, lat: 37.65};
//     var queryURL=
//     "https://api.openweathermap.org/data/2.5/forecast?" +
//      "q=" + 
//      searchCities +
//     "&" + 
//     apiKeyParam;

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         currentWeatherView.text(JSON.stringify(response, null, 2));
        
        
//         var offsetSeconds = response.city.timezone;
//         var FiveDayForecastData =[];

//         response.list.forEach(function(forecastListItem){
//         var seconds= forecastListItem.dt + offsetSeconds
//         var hours = seconds/3600
//         var hour = hours % 24
//         if (hour>12 && hour <=15)
//         var forecastData={
//             unixTime:forecastListItem.dt,
//             temperature: forecastListItem.main.temp,
//             humidityPercent:forecastListItem.main.humidity,
//             iconUrl: getWeatherIconUrlFromId(forecastListItem.weather[0].icon)
//         };
//         FiveDayForecastData.push(forecastData)
//         });
//     });  
    
// }

//icon for weather id 
// function getWeatherIconUrlFromId(iconId){
//     return "http://openweathermap.org/img/wn" + iconId + "@2x.png";
// }

// dumpUvData();
// dumpCurrentWeather();
// dump5DayForecastData();


// when user clicks on the search button
$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var searchCities = $("#searchUserInput").val().trim();
    
    dumpCurrentWeather(searchCities);
});