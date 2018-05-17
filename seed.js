const mongoose = require('mongoose')
const { Exercise } = require('./controller')

const DB_URL = 'mongodb://localhost:27017/workout-tracker'

const data = new Exercise({
    name: 'Chest press',
    area: 'chest',
    equipment: 'machine',
    PB: 20
})

mongoose.connect(DB_URL)
    .then(() => mongoose.connection.db.dropCollection('exercises'))
    .then(() => Exercise.insertMany([data]))
    .then(() => mongoose.disconnect())
    .catch(console.error)