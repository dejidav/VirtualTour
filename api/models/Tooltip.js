import mongoose from 'mongoose'

const tooltipModel = mongoose.Schema({
    type: {
        type: String,
        required: '{PATH} is required!'
    },

    rotationY: {
        type: Number 
    },
    linkedPhotoId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Photo'
    },

    width: {
        type: Number 
    },

    height: {
        type: Number
    },

    source: {type: String },
    attribution: {type: String}

},
{
    timestamps: true    
})

module.exports = mongoose.model('tooltip', tooltipModel);