const mongoose = require('mongoose')

const filmSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('movie', filmSchema, 'movies')