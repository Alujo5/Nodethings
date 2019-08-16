const fs = require('fs')
const chalk = require('chalk')


const getNotes = () =>{
    return "Your notes..."
}

const addNotes = (title, body) => {
    //  load pre-existing notes
    const notes = loadNotes()

    //filters repeated note title
    // const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)


    if(!duplicateNote){


        notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
    console.log(chalk.green.inverse("Note has been added"))
    }else{
        console.log(chalk.red.inverse("Note title already taken! "))
    }

}

//remove notes
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

//list notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.red.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

//readNote
const readNote = (title) => {
    const notes = loadNotes()

    const specificNote = notes.find((note) => note.title === title)

    if(specificNote !== undefined){
        console.log(chalk.green.inverse(specificNote.title))
        console.log(specificNote.body)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
}


// writing notes to a file
const saveNotes = (notes) =>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)

}
const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json')
        const bufferStr = buffer.toString()
        return JSON.parse(bufferStr)
    }catch(e){
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}