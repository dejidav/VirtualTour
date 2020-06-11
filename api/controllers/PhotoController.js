import Photo from '../models/Photo'

 const PhotoController = {
    async index(req, res){
        const photos = await Photo.find().populate('content');
        res.status(200).send(photos);
    },
    async store(req, res){
        const newPhoto = new Photo(req.body);
        newPhoto.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newPhoto);
        })  
    },
    async show(req, res){
        const photo = await Photo.findById({_id: req.params.photoId}).catch(console.error);
        res.status(200).send(photo);
    },
    async update(req, res){
        // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
        // Find the existing resource by ID
        Photo.findByIdAndUpdate(
            // the id of the item to find
            req.params.Id,
            
            // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            req.body,
            
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            {new: true},
            
            // the callback function
            (err, photo) => {
            // Handle any possible database errors
                if (err) return res.status(500).send(err);
                return res.send(photo);
            })
    },
    async remove(req, res){
  
    }
}

module.exports = PhotoController