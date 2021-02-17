const request = require('request');

const geocode = (location, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoiaGFyam90c3QiLCJhIjoiY2tsNXE4MTA0MHFmcTJvcXhqb2FnbWwwdCJ9.k0Ke4tFFgj7TGVQPvkTWZw&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Network Error. Unable to Connect to Location Services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Invalid Location. Could not Find Location!', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        address: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;