const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibmVjb25lcm8iLCJhIjoiY2p6Z2V4dGhyMGxhNDNocWZ1N3ozN2Q5dyJ9.Rv29tFPI5RaJFCCOSR88Dw'

    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to location service!', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find address. Try another search.', undefined)
        }else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode