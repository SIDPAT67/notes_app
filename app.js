const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


//customize yargs Version
yargs.version('1.1.0')

//Create Add Function
yargs.command ({
    command: 'add',
    describe: 'Adds a new note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Main Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create Remove Function
yargs.command ({
    command: 'remove',
    describe: 'Removes a note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create List Function
yargs.command ({
    command: 'list',
    describe: 'Lists the new note.',
    handler(argv) {
        notes.listNotes()
    }
})

//Create Read Function
yargs.command ({
    command: 'read',
    describe: 'Reads a note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()



