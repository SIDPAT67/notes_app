const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


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
    handler: function () {
        console.log('Title: ', yargs.argv.title)
        console.log('Body: ', yargs.argv.body)
    }
})

//Create Remove Function
yargs.command ({
    command: 'remove',
    describe: 'Removes a note.',
    handler: function () {
        console.log('Removing the note!')
    }
})

//Create List Function
yargs.command ({
    command: 'list',
    describe: 'Lists the new note.',
    handler: function () {
        console.log('Listing all the notes!')
    }
})

//Create Read Function
yargs.command ({
    command: 'read',
    describe: 'Reads a note.',
    handler: function () {
        console.log('Reading a note!')
    }
})
yargs.parse()



