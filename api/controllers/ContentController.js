import Content from '../models/Content'

export const ContentController = {

    async index(req, res){
        const content = await Content.find();
        res.send(content);
    },
    async store(req, res){
        
    },
    async show(req, res){
        const content = await Content.findById(req.params.id);
        res.send(photo);
    },
    async update(req, res){
  
    },
    async remove(req, res){
  
    }
}