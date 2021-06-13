// Add console.log to check to see if our code is working.
console.log("working");

// Create map object with center and zoom level
let map = L.map('mapid').setView([37.5, -122.5], 10);

// get cities data 
//let cityData = cities;

// Loop through the cities array and create one marker for each city
 // cityData.forEach(city => {
   //   console.log(city)
     // L.circlemarker(city.location, {
       //   color: "orange",
         // fillColor: "oranage",
          //fillOpacity: 0.5,
          //radius: city.population/200000
      //}).bindPopup("<h2>" + city.city + ", " + city.state + "</h2><hr><h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);

    //});

// Create poly line using coordinates and make line red
// Coordinates for each point to be used in the line
//let line = [
   //[33.9416, -118.4085],
    //[37.6213, -122.3790],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088]
  //];

//L.polyline(line, {
    //color: "yellow"
//}).addTo(map);

// Add GeoJSON data
let sanFranAirport = 
{"type":"FeatureCollection", "features":[{
    "type":"Feature",
    "properties": {
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing GeoJSON data
L.geoJSON(sanFranAirport, {
    // Turn each feature into a marker on the map
    onEachFeatures: function(feature, layer) {
        console.log(layer);
        //return L.marker(latlng)
        layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
    }
}).addTo(map);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

