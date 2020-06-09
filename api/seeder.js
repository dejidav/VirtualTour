import './index';
import mongoose from 'mongoose';
import { Content, Photo, SoundEffect, Tooltip } from './models'


//seed tooltips 

async function seedTooltips(){
    console.log("Seeding Tooltips to " + mongoose.connection.name + '...')
    let linktooltip = new Tooltip({
        text:"Middle View",
               rotationY: 1.929,
               linkedPhotoId:"111121"
    })
}






// seed photo, save and find 
async function seedPhoto() {
    console.log("Seeding photos to " + mongoose.connection.name + '...')
    let photo = new Photo({
        name: "11111",
        rotationOffset: 200,
        uri: "NashLibrary-firstfloor1.jpg",
        Tooltips:[]
    })
}






//seed SoundEffect




//seed Content 