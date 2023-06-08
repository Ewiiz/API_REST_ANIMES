const mongoose = require('mongoose')

const Animes = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    saisons: {
        type: Number,
        min: 1,
        required: true
    },
    episodes: {
        type: Number,
        min: 1
    },
    description: String,
    manga: {
        type: String,
        enum: ['oui', 'non']
    }
})

module.exports = mongoose.model('animes', Animes)