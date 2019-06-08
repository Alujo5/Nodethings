const fs = require('fs')

fs.writeFileSync('notes.txt', 'Afam bu Uchechukwu')

console.log('Uche')

const getNotes = function(){
    return "Your notes..."
}

module.exports = getNotes