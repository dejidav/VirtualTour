import Tooltip from '../models/tooltip'

export const TooltipController = {
    async index(req, res){
        const tooltips = await Tooltip.find().populate('Photo');
        res.send(tooltips);
    },
    async store(req, res){
        const newTooltip = new Tooltip(req.body);
        newTooltip.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newTooltip);
        })  
    },
    async show(req, res){
        const tooltip = await Tooltip.findById(req.params.id);
        res.send(tooltip);
    },
    async update(req, res){
        // This would likely be inside of a PUT request, since we're updating an existing document, hence the req.params.todoId.
        // Find the existing resource by ID
        Tooltip.findByIdAndUpdate(
            // the id of the item to find
            req.params.Id,
            
            // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            req.body,
            
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            {new: true},
            
            // the callback function
            (err, tolltip) => {
            // Handle any possible database errors
                if (err) return res.status(500).send(err);
                return res.send(tooltip);
            })
    },
    async remove(req, res){
  
    }
}