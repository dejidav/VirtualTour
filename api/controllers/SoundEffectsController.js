import SoundEffects from '../models/soundEffects'

export const SoundEffectsController = {

    async index(req, res){
        const soundEffects = await SoundEffects.find();
        res.send(soundEffects);
    },

    async store(req, res){
        
    },

    async show(req, res){
        const soundEffects = await SoundEffects.findById(req.params.id);
        res.send(soundEffects);
    },

    async update(req, res){
  
    },

    async remove(req, res){
  
    }
}