import Content from '../models/Content'

const  ContentController = {

     async index(req, res){
        const content = await Content.find().populate('photos').catch(console.error);
        res.send(content);
    },
    async store(req, res){
        
    },
    async show(req, res){
        const content = await Content.findById(req.params.id).catch(console.error);
        res.send(content);
    },
    async update(req, res){
  
    },
    async remove(req, res){
  
    }
}

module.exports = ContentController