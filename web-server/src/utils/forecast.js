const request = require('request')

const forecast = (long, lat, callback) => {
    const url = 'https://api.darksky.net/forecast/2a94d68caa2aed91329642e8219a801c/'+long+','+lat

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(response.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + ' of rain')
        }
    })
}


module.exports = forecast