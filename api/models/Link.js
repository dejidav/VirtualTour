import mongoose from 'mongoose'


const LinkModel = mongoose.Schema({
    text: {
        type: String, 
        required: '{PATH} is required!'
    },

    rotaionY: {
        type: Number 
    },

    linkedPhotoId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Photo'
    }
},
{
    timestamps: true    
})

module.exports = mongoose.model('Link', LinkModel);