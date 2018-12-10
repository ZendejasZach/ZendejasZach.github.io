function zipValidation(zip) {
   // initial testing
   var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
   console.log(isValidZip);
}

function getWeather() {
   // initial testing
   var zip = 84120;
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
      //console.log(weatherData);
      //console.log(weatherData.main.temp);
      weatherData.main.temp = convertKelvin(weatherData.main.temp);

      // replace HTML elements with weather
      document.getElementById("weather").innerHTML = "The weather in " + weatherData.name + " is " + weatherData.main.temp + " Degrees";
   }

   // send request
   weatherRequest.send();

   //convert kelvin degrees to Fahernheit
   function convertKelvin(kelvin) {
      var fDegrees = ((kelvin - 273.15) * 1.8) + 32;
      //console.log("F Degrees " + fDegrees);
      return fDegrees.toFixed(0);
   }
}

function getReddit() {
   // create request
   var redditRequest = new XMLHttpRequest();
   var sReddit = 'funny'

   // open a connection
   openReddit();
   function openReddit() {
      redditRequest.open('GET', 'http://www.reddit.com/r/' + sReddit + '/new.json?sort=hot', true);
   }

   // parse the data
   redditRequest.onload = function () {
      var reddit = JSON.parse(this.response);
      console.log(reddit);

      // replace with Reddit Data
      // show headings
      document.getElementById("redditTable").style.visibility = "visible";
      document.getElementById("subreddit").innerHTML = "r/" + reddit.data.children[0].data.subreddit;
      // Fill table
      for (i = 0; i < 4; i++) {
         // filter out NSFW content
         if (reddit.data.children[i].over18 == true) {
            i++;
         }
         document.getElementById("link" + i + "TH").innerHTML = '<img src=' + reddit.data.children[i].data.thumbnail + '>';
         document.getElementById("link" + i + "T").innerHTML = '<a href=' + reddit.data.children[i].data.url + '>' + reddit.data.children[i].data.title + '</a>';
      };


   }

   // send
   redditRequest.send();
}

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
      console.log(news);

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

      // replace background
      // show headings
      //document.getElementsByClassName("bg").style.background = "url('" + background.data.children[0].data.url + "')";
      document.getElementById("bg").style.backgroundImage = "url('" + background.data.children[0].data.url + "')";
      //docBack[0].style.backgroundimage = background.data.children[0].data.url;
      console.log(background.data.children[0].data.url);
   };

   // send
   backgroundRequest.send();
}