// check if returning user
function isReturn() {
   if (localStorage.return == "yes") {
      window.location = 'final.html';
   }
}

// start page data entry
function startValidation() {
   // grab the data
   localStorage.name = document.getElementById("iName").value;
   localStorage.zip = document.getElementById("iZip").value;
   localStorage.sReddit = document.getElementById("iReddit").value;
   localStorage.return = "yes";

   // verifiy data
   if(localStorage.name && localStorage.zip){
      window.location = 'final.html';
   }
}

// div transitions
function transitions(){
   // myHome animations
   document.getElementById("myHome").style.top = "2%";
   document.getElementById("myHome").style.fontSize = "12"
   
   // name animations
   document.getElementById("name").style.opacity = "1";

   // News animations
   document.getElementById("news").style.opacity = "1";

   // reddit
   document.getElementById("reddit").style.opacity = "1";

   // weather
   document.getElementById("weather").style.opacity = "1";
}

function getName(){
   document.getElementById("greeting").innerHTML = "<p>Welcome Back " + localStorage.name +"</p>";
}
// function to populate the weather widget
function getWeather() {
   // initial variables
   var zip = localStorage.zip;
   var weatherData;

   // Create request
   var weatherRequest = new XMLHttpRequest();

   // Open connection
   openWeather();
   function openWeather() {
      weatherRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&APPID=9b63cbf0319c63f470ff592e8427da88', true);
   }

   // parse the data
   weatherRequest.onload = function () {
      weatherData = JSON.parse(this.response);
      weatherData.main.temp = convertKelvin(weatherData.main.temp);
      weatherData.main.temp_max = convertKelvin(weatherData.main.temp_max);
      weatherData.main.temp_min = convertKelvin(weatherData.main.temp_min);

      // replace HTML elements with weather
      // Cold weather
      if (weatherData.main.temp < 32) {
         document.getElementById("weather").innerHTML = "<p>You'll need a heavy jackett</p>"
            + "<p id='curTemp'>Current Tempreture: " + weatherData.main.temp + "°F</p>"
            + "<p id='high'>High: " + weatherData.main.temp_max + "°F</p>"
            + "<p id='low'>Low: " + weatherData.main.temp_min + "°F</p>";
      }

      // cool weather
      else if (weatherData.main.temp <= 60 && weatherData.main.temp >= 33) {
         document.getElementById("weather").innerHTML = "<p>You'll need a jackett</p>"
            + "<p id='curTemp'>Current Tempreture: " + weatherData.main.temp + "°F</p>"
            + "<p id='high'>High: " + weatherData.main.temp_max + "°F</p>"
            + "<p id='low'>Low: " + weatherData.main.temp_min + "°F</p>";

      }

      // nice weather
      else if (weatherData.main.temp <= 80 && weatherData.main.temp >= 61) {
         document.getElementById("weather").innerHTML = "<p>Its nice out</p>"
            + "<p id='curTemp'>Current Tempreture: " + weatherData.main.temp + "°F</p>"
            + "<p id='high'>High: " + weatherData.main.temp_max + "°F</p>"
            + "<p id='low'>Low: " + weatherData.main.temp_min + "°F</p>";
      }

      // warm weather
      else if (weatherData.main.temp <= 95 && weatherData.main.temp > 81) {
         document.getElementById("weather").innerHTML = "<p>Its warm out</p>"
            + "<p id='curTemp'>Current Tempreture: " + weatherData.main.temp + "°F</p>"
            + "<p id='high'>High: " + weatherData.main.temp_max + "°F</p>"
            + "<p id='low'>Low: " + weatherData.main.temp_min + "°F</p>";

      }

      // hot weather
      else if (weatherData.main.temp > 95) {
         document.getElementById("weather").innerHTML = "<p>Its a hot one</p>"
            + "<p id='curTemp'>Current Tempreture: " + weatherData.main.temp + "°F</p>"
            + "<p id='high'>High: " + weatherData.main.temp_max + "°F</p>"
            + "<p id='low'>Low: " + weatherData.main.temp_min + "°F</p>";

      }
   }


   // send request
   weatherRequest.send();

   //convert kelvin degrees to Fahernheit
   function convertKelvin(kelvin) {
      var fDegrees = ((kelvin - 273.15) * 1.8) + 32;
      return fDegrees.toFixed(0);
   }
}

// populate data for reddit widget
function getReddit() {
   // create request
   var redditRequest = new XMLHttpRequest();
   if (localStorage.sReddit) {
      var sReddit = localStorage.sReddit
   }
   else {
      sReddit = "cleanmemes";
   }

   // open a connection
   openReddit();
   function openReddit() {
      redditRequest.open('GET', 'http://www.reddit.com/r/' + sReddit + '/new.json?sort=hot', true);
   }

   // parse the data
   redditRequest.onload = function () {
      var reddit = JSON.parse(this.response);
      // replace with Reddit Data
      document.getElementById("redditTable").style.opacity = 1;
      document.getElementById("subreddit").innerHTML = "r/" + reddit.data.children[0].data.subreddit;
      // Fill table
      for (i = 0; i <= 2; i++) {
         document.getElementById("link" + i + "TH").innerHTML = '<img src=' + reddit.data.children[i].data.thumbnail + '>';
         document.getElementById("link" + i + "T").innerHTML = '<a href=' + reddit.data.children[i].data.url + '>' + reddit.data.children[i].data.title + '</a>';
      };
   }

   // send
   redditRequest.send();
}

// populate data for news widget
function getNews() {
   var newsRequest = new XMLHttpRequest();

   // Open the connection
   openNews();
   function openNews() {
      newsRequest.open('GET'
         , 'https://newsapi.org/v2/top-headlines?'
         + 'country=us&'
         + 'apiKey=32b62204413f47e6b2b21ccecfb75f79'
         , true)
   }

   // Parse
   newsRequest.onload = function () {
      var news = JSON.parse(this.response);

      // replace HTML
      for (i = 0; i < 4; i++) {
         // Title
         document.getElementById("nLink" + i + "T").innerHTML = '<a href='
            + news.articles[i].url
            + '>'
            + news.articles[i].title;
         // source
         document.getElementById("nLink" + i + "S").innerHTML = news.articles[i].source.name;
      }
   }


   // send request
   newsRequest.send();
}

// grabs background image
function getBackground() {
   // create request
   var backgroundRequest = new XMLHttpRequest();

   // open a connection
   openBackground();
   function openBackground() {
      backgroundRequest.open('GET', 'http://www.reddit.com/r/earthporn/new.json?sort=top&t=day&limit=5', true);
   }

   // parse the data
   backgroundRequest.onload = function () {
      var background = JSON.parse(this.response);
      console.log(background);

      // make sure I get a background
      var i = -1;
      var isBackground = false;
      while (isBackground == false){
         i++;
         if(background.data.children[i].data.url.endsWith(".jpg")){
            console.log("Found background!");
            isBackground = true;
         }
         else{
            console.log("didnt find background");
         }
      }
      // replace background
      document.getElementById("bg").style.backgroundImage = "url('" + background.data.children[i].data.url + "')";
   };

   // send
   backgroundRequest.send();
}

// clears local data
function resetCache(){
   localStorage.return = "";
   window.location = 'start.html';
}