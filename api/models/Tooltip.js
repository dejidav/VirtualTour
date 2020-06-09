import mongoose from 'mongoose'

const tooltipModel = mongoose.Schema({
    type: {
        type: String,
        required: true
    },

    rotationY: {
        type: Number 
    },

    width: {
        type: Number 
    },

    height: {
        type: Number
    },

    source: {
        type: String
     },

    text: {
        type: String 
    },

    attribution: {
        type: String
    },
    photo_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Photo'
    }

},
{
    timestamps: true    
})

module.exports = mongoose.model('Tooltip', tooltipModel);