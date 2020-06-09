import Photo from '../models/Photo'

 const PhotoController = {
    async index(req, res){
        const photos = await Photo.find().populate('content');
        res.send(photos);
    },
    async store(req, res){
        
    },
    async show(req, res){
        const photo = await Photo.findById({_id: req.params.photoId}).catch(console.error);
        res.send(photo);
    },
    async update(req, res){
  
    },
    async remove(req, res){
  
    }
}

module.exports = PhotoController