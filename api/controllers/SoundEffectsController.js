import SoundEffects from '../models/soundEffects'

export const SoundEffectsController = {

    async index(req, res){
        var sound = await SoundEffects.find();
        res.send(sound);
    },

    async store(req, res){
        
    },

    async show(req, res){
        var sound1 = await SoundEffects.findById(req.params._id);
        res.send(sound1);
    },

    async update(req, res){
  
    },

    async remove(req, res){
  
    }
}