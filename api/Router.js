//contains routes 
import express from 'express'
import {index } from './controllers/ContentController.js'
import {show} from './controllers/PhotoController'
import soundEffectsController from './controllers/SoundEffectsController'
import Content from './models/Content'
import './index'

const router = express.Router();

router.get("/", index);

router.get("/photo/:photoId", show);

router.get("/soundEffects", (req, res) => {
    res.send("200 SOund Effects")
});

router.get("/photos", (req, res) => {
    res.send("200 All photos ")
});

module.exports = router;