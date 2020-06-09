import Photo from '../models/Photo'

export const PhotoController = {
    async index(req, res){
        const photos = await Photo.find().populate('content');
        res.send(photos);
    },
    async store(req, res){
        
    },
    async show(req, res){
        const photo = await Photo.findById(req.params.id);
        res.send(photo);
    },
    async update(req, res){
  
    },
    async remove(req, res){
  
    }
}