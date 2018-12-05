function getWeather() {
   // initial testing
   var zip = 84015;
   var weatherData;

   // Create request
   var weatherRequest = new XMLHttpRequest();

   // Open connection
   openWeather();
   function openWeather() {
      weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=84015&APPID=9b63cbf0319c63f470ff592e8427da88', true);
   }

   // parse the data
   weatherRequest.onload = function () {
      weatherData = JSON.parse(this.response);
      console.log(weatherData);
      console.log(weatherData.main.temp);
      weatherData.main.temp = convertKelvin(weatherData.main.temp);
   }

   // send request
   weatherRequest.send();

   // replace with weather
   console.log(weatherData);
   //document.getElementById("weather").innerHTML = weatherData.temp;

   //convert kelvin degrees to Fahernheit
   function convertKelvin(kelvin) {
      var fDegrees = ((kelvin - 273.15) * 1.8) + 32;
      console.log("F Degrees " + fDegrees);
   }
}

function getReddit() {
   // create request
   var redditRequest = new XMLHttpRequest();

   // open a connection
   openReddit();
   function openReddit() {
      redditRequest.open('GET', 'http://www.reddit.com/r/funny/new.json?sort=hot', true);
   }

   // parse the data
   redditRequest.onload = function () {
      var reddit = JSON.parse(this.response);
      console.log(reddit);
   }

   // send
   redditRequest.send();
}

// TODO ZIP validation