import soundEffects from '../models/soundEffects'

export const SoundEffectsController = {

    async index(req, res){
        var sound = await soundEffects.find();
        res.send(sound);
    },

    async store(req, res){
        
    },

    async show(req, res){
        var sound1 = await soundEffects.findById(req.params._id);
        res.send(sound1);
    },

    async update(req, res){
        // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
        // Find the existing resource by ID
        Link.findByIdAndUpdate(
        // the id of the item to find
        req.params.Id,
            
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
            
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
            
        // the callback function
        (err, newEffects) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(newEffects);
        })
    },

    async remove(req, res){
  
    }
}