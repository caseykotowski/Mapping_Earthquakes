// Add console.log to check to see if our code is working.
console.log("working");

// Create map object with center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);

// get cities data 
let cityData = cities;

// Loop through the cities array and create one marker for each city
  cityData.forEach(city => {
      console.log(city)
      L.circlemarker(city.location, {
          color: "orange",
          fillColor: "oranage",
          fillOpacity: 0.5,
          radius: city.population/200000
      }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2><hr><h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);

    });