var APIKey ="64ba5d7c07cae452adff9bf6ce978013";
var city = "London";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;

var getCityWeather = function(city) {
  fetch(queryURL).then(function(response) {
    response.json().then(function(data) {
      console.log(data)
  });
});
  };

getCityWeather();
