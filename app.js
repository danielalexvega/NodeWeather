const { Console } = require('console');
const request = require('request');

http://api.weatherstack.com/current?access_key=0d455614b783bd2ecf10f7fdc5284daa&query=37.8267,-122.4233
const URL = 'http://api.weatherstack.com/current?access_key=0d455614b783bd2ecf10f7fdc5284daa&query=37.8267,-122.4233&units=f';

request({ url: URL, json: true }, (error, response) => {
  if(error) {
    console.log('Unable to connect to weather service');
  } else if (response.body.error) {
    console.log('Unable to find location.');
  } else {
    const data = response.body;
    console.log(`It is currently ${data.current.temperature} degrees out and ${data.current.weather_descriptions[0].toLowerCase()}. It feels like ${data.current.feelslike} degrees out.`);
  };
});

// const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFuaWVsYWxleHZlZ2EiLCJhIjoiY2tnaWN2eWd3MGFveTJ5dGpocTI4NG5mNSJ9.AEksOUjzUsesB7r8swU0Ew&limit=1';

// request({url: mapboxURL, json: true}, (error, response) => {
//   const data = response.body;
//   // console.log(data.features[0].center);

//   const lon = data.features[0].center[0];
//   const lat = data.features[0].center[1];

//   console.log(`The city of Los Angeles has a latitude of ${lat} and a longitude of ${lon}`);
// });