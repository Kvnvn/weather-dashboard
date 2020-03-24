
var currentWeatherView = $("#currentWeather");
var searchCities = $("#searchUserInput").val().trim();
var apiKeyParam = "appid=0c18dc71f2179d55a217164f2d1005e6";
var unitsFormat = "units-imperial";

//when dumpcurrent weather happens it should take api and store it 
//current weather data should correspond to things we are looking for
function dumpCurrentWeather() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCities + unitsFormat + "&" + apiKeyParam;
   
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
// }
// //in dump data it should take api source and place in storage 
// //use JSON stringify to "pretty print"
// function dumpUvData(){
    
//     var location = {lon: response.lon, lat: response.lat};
//     var queryURL=
//     "https://api.openweathermap.org/data/2.5/uvi?lat="+ 
//     location.lat + 
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
// //icon for weather id 
// function getWeatherIconUrlFromId(iconId){
//     return "http://openweathermap.org/img/wn" +iconId + "@2x.png"
// }
// //rendering history 
// function renderHistory(searchHistory){

// var newListGroup = $("<div>")

// searchHistory.forEach(function(city){

// var button = $("<button>").attr({
// type:'button',
// class:'list-group-item list-group-item-action'
// }).text(city)
// newListGroup.append(button)
// })

// $(".list-group").empty()
// .append(newListGroup);

// var searchHistory =[]
// renderHistory(searchHistory);
// }


// dumpUvData();
// dumpCurrentWeather();
// dump5DayForecastData();
