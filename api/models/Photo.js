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
        [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Tooltip' }
            
        ], 
        [
            { type: mongoose.Schema.Types.ObjectId, ref: 'Link' }
        ]
    ],
    content_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'content'
    }
},
    {
        timestamps: true    
})

module.exports = mongoose.model('Photo', photoModel);