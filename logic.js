// Add console.log to check to see if our code is working.
console.log("working");

let satalliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
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
    center: [30, 30], 
    zoom: 2,
    layers: [streets]
});

// Pass maps layers into layers control and add layers contol to map
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/caseykotowski/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creating GeoJSON layer w/ retrieved data
    L.geoJson(data, {
        style: myStyle,
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3> Neighborhood: " + feature.properties.neighborhood + "</h3>");
        }
}).addTo(map);
});

// Create style for the lines
let myStyle = {
    color: "lightblue",
    weight: 1,
    fillColor: "yellow"
}