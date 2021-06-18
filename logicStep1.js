// Add console.log to check to see if our code is working.
console.log("working");

let satalliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satallite Streets":satalliteStreets
};

// Create map object with center and zoom level
let map = L.map('mapid', {
    center: [39.5, -98.5], 
    zoom: 3,
    layers: [streets]
});

// Pass maps layers into layers control and add layers contol to map
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let earthquakeData = "hhttps://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data
d3.json(earthquakeData).then(function(data) {
    // Creating GeoJSON layer w/ retrieved data
    L.geoJson(data).addTo(map);
});

// Create style for the lines
let myStyle = {
    color: "lightblue",
    weight: 1,
    fillColor: "yellow"
}
// left off on 13.6.1