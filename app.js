const express = require("express");
const https = require("https");

const app = express();


app.get("/",function(req,res){

    const city = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=5b589f3e6037f9d696bf9110a75a2d2d&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            res.send("<h1>The temperature in London is : "+ temp + "degrees Celcius</h1>");
        })
    });
    
})



var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33.8902,151.1759),
    new google.maps.LatLng(-33.8474, 151.2631)
);
var options = {
    bounds:defaultBounds
}

var city = document.getElementById('city');
map.controls[google.maps.ControlPosition.TOP_LEFT].push(city);

var autocomplete = new google.maps.places.Autocomplete(city,options);





