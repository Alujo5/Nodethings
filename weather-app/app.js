const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if(!place){
    return console.log('Please what location do you want? ')
}

geocode(place, (error, data) => {

    if(error){
        return console.log(error)
    }

    forecast( data.longitude , data.latitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
    })

})

