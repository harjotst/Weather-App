const request = require('request');

const weather = ({latitude, longitude}, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=360ed90d181ce817602ada6000c142f8&query=${latitude},${longitude}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {     
      callback('Network Error. Unable to Connect to Weather Services!', undefined);
    } else if (response.body.error) {
      callback('Invalid Location. Enter a Valid Location!', undefined);
    } else {
      callback(undefined, {
        temperature: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        description: response.body.current.weather_descriptions[0]
      });
    } 
  });
};

module.exports = weather;