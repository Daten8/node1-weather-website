const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bbfb0d1dfe641ca9bb5d210b627c4b2d&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m';

    request({ url : url, json : true}, (error,{body} = {}) => {
        if(error) {
            callback('Unable to connect to the weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!',undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}.It is currently ${body.current.temperature} degrees out though it feels like ${body.current.feelslike}. There is ${body.current.precip}% chance of rain`);
        }
    });
};

module.exports = forecast;