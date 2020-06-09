//contains routes 
import express from 'express'
//import {ContentController, PhotoController, SoundEffectsController, TooltipController } from './controllers'

const router = express.Router();

router.get("/", (req, res) => {
    res.send("200 Content")
});

router.get("/photo/:photoId", (req, res) => {
    let id = req.params.photoId
    res.send("200 Photo with " + id )
});

router.get("/soundEffects", (req, res) => {
    res.send("200 SOund Effects")
});

router.get("/photos", (req, res) => {
    res.send("200 All photos ")
});

module.exports = router;