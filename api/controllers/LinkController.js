import Link from '../models/Link'

const  LinkController = {

    async index(req, res){
       const link = await Link.find().catch(console.error);
       res.status(200).send(link);
   },
   async store(req, res){
       const newLink = new Link(req.body);
       newLink.save(err => {
           if (err) return res.status(500).send(err);
           return res.status(200).send(newLink);
       })   
   },

   async show(req, res){
       const link = await Link.findById(req.params.id).catch(console.error);
       res.send(link);
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
        (err, link) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(link);
        })
   },
   async remove(req, res){
 
   }
}

module.exports = LinkController