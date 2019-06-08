const paint = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//create note add,remove, read, list

const command = process.argv[2]

// if(command === 'add'){
//     console.log('Adding notes...')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }

//creates an add command
yargs.command({
    command : 'add',
    describe :'Adding a new note',
    handler : function(){
        console.log('Adding a new note!')
    }
})

//creates a remove command
yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    handler: function(){
        console.log('Removing the note!')
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe:'listing available notes',
    handler: function(){
        console.log('listing available notes')
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    handler: function(){
        console.log('Read notes')
    }
})

console.log(yargs.argv)