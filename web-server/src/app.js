const path = require('path')
const express = require('express')
const hbs = require('hbs')
console.log(__dirname)


const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Uchechukwu'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Uchechukwu'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        message: ' Na like this we go dey they',
        name: 'Uchechukwu'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Help article not Found',
        name:'Uchechukwu'
    })
})

app.get('/*'), (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page not found',
        name: 'Uchechukwu'
    })
}
app.get('/weather', (req, res) => {
   res.send({
       forecast: 'It is raining',
       location: 'Montreal'
   })
})

app.listen(3000, () =>{
   console.log('Server is up on port 3000.')
})
