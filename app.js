let message=document.getElementById('message');

 window.onload=init;

function init(){
  navigator.geolocation.getCurrentPosition(locationData)
    

}

function locationData(data){
//console.log(data)
message.innerHTML +=`Latitude: ${data.coords.latitude}<br>`
message.innerHTML +=`Longitude: ${data.coords.longitude}`
let map;
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: data.coords.latitude, lng: data.coords.longitude},
    zoom: 8
})
}

