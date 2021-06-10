// Add console.log to check to see if our code is working.
console.log("working");

// Create map object with center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 14)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

//Marker for Los Angeles, California
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

L.circleMarker([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);