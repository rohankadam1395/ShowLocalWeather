$(document).ready(function(){
console.log("DOM is loaded");

$('#showWeather').on('click',()=>{
    navigator.geolocation.getCurrentPosition((positon)=>{
        console.log(positon);
        $('#weather_info').text(positon.coords.latitude+" "+positon.coords.longitude);
var latitude=positon.coords.latitude;
var longitude=positon.coords.longitude;
        fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&&lon=${longitude}`)
        .then(response=>response.json())
        .then(data=>{   
console.log(data);

        })
        .catch(err=>{
console.log(err);
        })
                    },()=>{
        console.log("Error in fetching");
                    });
});


});