import mongoose from 'mongoose'

const contentModel = mongoose.Schema({
    nav_icon: {
        type: String 
    },
    firstPhotoId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Photo'
    },
    soundEffects: {
        type: mongoose.Schema.Types.ObjectId, ref: 'soundEffects'
    },

    photos : [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Photo'
    }]

}, {
    timestamp: true
})

module.exports = mongoose.model('content', contentModel);