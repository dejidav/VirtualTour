import mongoose from 'mongoose'


const photoModel = mongoose.Schema({
    name:{
        type: String,
        required: '{PATH} is required!'
    },

    rotationOffset: {
        type: Number
    },

    uri: {
        type: String
    },
    tooltips: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'tooltip' }
    ]
},
    {
        timestamps: true    
})

module.exports = mongoose.model('Photo', photoModel);