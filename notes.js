const fs = require('fs')
const chalk = require('chalk')
const { clearScreenDown } = require('readline')


const addNote = (title, body) => {
    const notes = loadNotes()
    const dulpicateNote = notes.find((note) => note.title === title)

    if (!dulpicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
 
    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgGreen(title + ' Removed sucessfully'))      
        saveNotes(notesToKeep)
    } else {  
        console.log(chalk.bgRed('This note does not exist.'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgBlue('Your Notes:'))
    notes.forEach((note) => {
        console.log(note.title)
    })
    }

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
        if (note) {
            console.log(chalk.inverse('Title: ' + note.title) + '\n' + note.body)
        } else {
            console.log(chalk.bgRed('Note not found!'))
        }
}
    
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}

