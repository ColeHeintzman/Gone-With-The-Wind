var APIKey ="64ba5d7c07cae452adff9bf6ce978013";
var cityFormEl = document.querySelector("#city-form");

var formSubmitHandler = function(event) {
  event.preventDefault();
  var cityInput = document.querySelector("#search-city").value;
  console.log(cityInput);
  if (cityInput) {
    //console.log(queryCurrentURL);
    getCurrentWeather(cityInput);
    cityFormEl.value="";
  }else{
    alert("Please enter a valid city")
  }
}


var getCurrentWeather = function(city) {
  var queryCurrentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
  fetch(queryCurrentURL).then(function(response) {
    response.json().then(function(data) {
      console.log(data)
      displayCurrentWeather(data, city);
  });
});
  };

 var displayCurrentWeather = function(weather) {
   console.log(weather.weather, weather.wind, weather.main.feels_like, weather.main.humidity, weather.name);
  };

  cityFormEl.addEventListener("submit", formSubmitHandler);
  

