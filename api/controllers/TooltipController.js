import Tooltip from '../models/tooltip'

export const TooltipController = {
    async index(req, res){
        const tooltips = await Tooltip.find().populate('Photo');
        res.send(tooltips);
    },
    async store(req, res){
        
    },
    async show(req, res){
        const tooltip = await Tooltip.findById(req.params.id);
        res.send(tooltip);
    },
    async update(req, res){
  
    },
    async remove(req, res){
  
    }
}