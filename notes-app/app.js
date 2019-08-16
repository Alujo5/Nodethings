const chalk = require('chalk')
const yargs = require('yargs')
const noteUtil = require('./notes.js')

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
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Alias',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteUtil.addNotes(argv.title, argv.body)
    }
})

//creates a remove command
yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteUtil.removeNote(argv.title)
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe:'listing available notes',
    handler(){
        noteUtil.listNotes()
    }
})

//create a read command
yargs.command({
    command: 'read',
    describe: 'Reading notes',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteUtil.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()