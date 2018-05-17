const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const { getExercises } = require('./controller')

const DB_URL = 'mongodb://localhost:27017/workout-tracker'

mongoose.connect(DB_URL)

app.get('/', (req, res) => res.send('Hello world!'))

app.route('/api/exercises')
    .get(getExercises)

app.listen(3000, () => console.log('Port 3000 listening'))