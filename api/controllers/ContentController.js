import Content from '../models/Content'

const  ContentController = {

     async index(req, res){
        const content = await Content.find().populate('photos').catch(console.error);
        res.status(200).send(content);
    },
    async store(req, res){
        const newContent = new Content(req.body);
        newContent.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newContent);
        })   
    },

    async show(req, res){
        const content = await Content.findById(req.params.id).catch(console.error);
        res.send(content);
    },
    async update(req, res){
        // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
        // Find the existing resource by ID
        Content.findByIdAndUpdate(
            // the id of the item to find
            req.params.Id,
            
            // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            req.body,
            
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            {new: true},
            
            // the callback function
            (err, content) => {
            // Handle any possible database errors
                if (err) return res.status(500).send(err);
                return res.send(content);
            })
    },
    async remove(req, res){
  
    }
}

module.exports = ContentController