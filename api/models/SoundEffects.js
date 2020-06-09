import mongoose from 'mongoose'

const soundEffectsModel = mongoose.Schema({
    navButton: {
        onEnter: {
            uri: {
                type: String
            },
            attributionUri: {
                type: String
            } 
        },
            
        onClick: {
            uri: {
                type: String
            },
            attributionUri: {
              type: String
            }
        }
    },

    infoButton: {
        onEnter: {
            uri: {
                type: String
            },
            attributionUri: {
                type: String
            } 
        }
    },

    ambient: {
        uri: {
            type: String
        },
        url:{
            type: String
        },
        attributionUri: {
            type: String
        },
        loop:{
            type: Boolean
        },
        volume: {
            type: Number
        } 
    }
},{
    timestamp: true
})

module.exports = mongoose.model('soundEffects', soundEffectsModel)