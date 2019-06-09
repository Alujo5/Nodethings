const fs = require('fs')

const dataBuffer = fs.readFileSync('myjson.json')

const dataprint = dataBuffer.toString()

const getter = JSON.parse(dataprint)

getter.name = 'Uchechukwu'
getter.age = 45

const userJ = JSON.stringify(getter)

fs.writeFileSync('myjson.json', userJ)