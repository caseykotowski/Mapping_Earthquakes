// Add console.log to check to see if our code is working.
console.log("working");

// Create map object with center and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

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
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

L.polyline(line, {
    color: "yellow"
}).addTo(map);