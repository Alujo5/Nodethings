const path = require('path')
const express = require('express')
console.log(__dirname)
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname,'../templates')

app.set('view engine', 'hbs')
app.set('view', viewPath)
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
        message: ' Na like this we go dey they'
    })
})

app.get('/weather', (req, res) => {
   res.send({
       forecast: 'It is raining',
       location: 'Montreal'
   })
})

app.listen(3000, () =>{
   console.log('Server is up on port 3000.')
})
