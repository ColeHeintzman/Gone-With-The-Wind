var APIKey ="64ba5d7c07cae452adff9bf6ce978013";
var cityFormEl = document.querySelector("#city-form");
var cityNameEl = document.querySelector("#searched-city") 
var currentTemp = document.querySelector("#currentTemp") 
var pastSearches = document.querySelector("#past-search-buttons");
var searchedCities = JSON.parse(localStorage.getItem("cities")) || [];

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


var displayCurrentWeather = function(weather) {
  console.log(weather.weather, weather.wind, weather.main.feels_like, weather.main.humidity, weather.name);
  cityNameEl.textContent = weather.name;
  currentTemp.textContent = "Temp: " + weather.main.temp;
 };

 var displayHistory = function(){
   pastSearches.textContent = ""
   for (var i = 0; i < searchedCities.length;i++){
    var cityBtn = document.createElement("button")
    cityBtn.textContent = searchedCities[i];
    cityBtn.classList.add("pastCities")
    cityBtn.setAttribute("data", searchedCities[i])
    pastSearches.appendChild(cityBtn)
   }
  
 }

 var saveToLocal = function(city){
   searchedCities.push(city)
localStorage.setItem("cities", JSON.stringify(searchedCities))
 }

var getCurrentWeather = function(city) {
  var queryCurrentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
  fetch(queryCurrentURL).then(function(response) {
    response.json().then(function(data) {
      console.log(data)
      displayCurrentWeather(data);
      saveToLocal(city);
      displayHistory();
  });
});
  };


  displayHistory()


  pastSearches.addEventListener("click", function(event){
    var clickedCity = event.target.innerHTML;
    getCurrentWeather(clickedCity)
  })

  cityFormEl.addEventListener("submit", formSubmitHandler);
  

