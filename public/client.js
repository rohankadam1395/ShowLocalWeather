$(document).ready(function(){
console.log("DOM is loaded");
var root=document.getElementById("root");
if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,error);

}else{
root.innerHTML="GeoLocation is not supported";
}

function success(position){

        console.log(position);
       // $('#weather_info').text(positon.coords.latitude+" "+positon.coords.longitude);
var latitude=position.coords.latitude;
var longitude=position.coords.longitude;
        fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&&lon=${longitude}`)
        .then(response=>response.json())
        .then(data=>{   
console.log(data);

$('#weather_image').attr('src',data.    weather[0].icon);
$('#temperature #temperature_value').text(data.main.temp);
$('#temperature #temperature_symbol').text("  "+String.fromCharCode(176));
$('#temperature #temperature_unit').text("C");
$('#location').text(data.name+","+data.sys.country);
$('#temperature #temperature_unit').on('click',(event)=>{
console.log(event.target.innerText);
var unit=event.target.innerText;
var temp=parseFloat($('#temperature #temperature_value').text());
console.log(temp);

if(unit.localeCompare("C")==0){
console.log("Its a C");
$('#temperature #temperature_unit').text("F");
temp=(temp*(9/5)+32).toFixed(2);
$('#temperature #temperature_value').text(temp);

}else{
        $('#temperature #temperature_unit').text("C");  

        console.log("May be F");
        temp=((temp-32)*(5/9)).toFixed(2);
        $('#temperature #temperature_value').text(temp);


}



});


        })
        .catch(err=>{
console.log(err);
        })
                   
};

function error(err){
        console.warn(err);

}



});