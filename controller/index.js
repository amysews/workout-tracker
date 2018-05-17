const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    name: String,
    area: String,
    equipment: String,
    PB: Number
})

const Exercise = mongoose.model('exercises', exerciseSchema)

function getExercises(req, res) {
    Exercise.find({})
        .then(data => res.send(data))
        .catch(err => res.status(500).json(err))
}

module.exports = { getExercises, Exercise }