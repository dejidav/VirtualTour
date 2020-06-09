import './index';
import mongoose from 'mongoose';
import  Tooltip from './models/Tooltip'
import Photo from './models/Photo'
import Content from './models/Content'
import Link from './models/Link'
import SoundEffect from './models/SoundEffects'


//seed tooltips 

async function seedTooltips(){
    console.log("Seeding Tooltips to " + mongoose.connection.name + '...')
    const photo = Photo.findOne({name: "11111"})
    
    const tooltips = [
    {
        type: "panelimage",
        rotationY: 35,
        width: 400,
        height: 400,
        source: "my computer",
        text:"Service Desk",
        attribution: "The library support desk focus to help students with tools and information's. Students can borrow books and movies from support desk. Tools are also available for loans.",
        photo_id: photo._id
    }

    ]
    tooltips.forEach( function(tool) {
        var newTooltip =  new Tooltip(tool)
        newTooltip.update()
    })

    const a = await Tooltip.find()
    console.log('tooltips: ' + a)


}



//seedTooltips().catch(console.error)

//Seed Link
async function seedLinks(){
    const photo = Photo.findOne({name: "11111"})

    console.log("Seeding links to " + mongoose.connection.name + '...')
    const link = {
        text: "Middle View",
    
        rotaionY: 1.929,
    
        linkedPhotoId: photo._id 
    }

    const newLink = new Link(link)
    await newLink.save()
}


// seed photo, save and find 
async function seedPhotos() {
    console.log("Seeding photos to " + mongoose.connection.name + '...')
    const tooltip = await Tooltip.findOne({type: "panelimage"}); // returns array
    const content = await Content.findOne({nav_icon: "gannon_icon.png"})
    const link = await Link.findOne({ text: "Middle View"})
    
    const photos = [
        {
        name: "11111",
        rotationOffset: 200,
        uri: "NashLibrary-firstfloor1.jpg",
        Tooltips: [[tooltip._id], [link._id]], // takes in array 
        content_id: content._id
    },

    {
        name: "2222222",
        rotationOffset: 200,
        uri: "NashLibrary-firstfloor2.jpg",
        Tooltips: [],
        content_id: content._id
    },

    {
        name: "333333",
        rotationOffset: 200,
        uri: "NashLibrary-firstfloor3.jpg",
        Tooltips: [[tooltip._id], [link._id]],
        content_id: content._id
    }
]

photos.forEach(function(photo){
    var newPhoto = new Photo(photo);
    newPhoto.save();
})

const b = await Photo.find();
console.log('photos: ' + b);


}






//seed SoundEffect
async function seedSoundEffects() {
    console.log("Seeding soundEffects to " + mongoose.connection.name + '...');
    const newSetting = { 
        navButton:{
            onEnter:{
                uri: "switch-flip.wav",
                attributionUri: "https://www.freesound.org/people/ianstargem/sounds/278205/"
            },
            onClick:{
                uri:"menu-click.wav",
                attributionUri:"https://www.freesound.org/people/fins/sounds/146721/"
            }
        },
        inforButton:{
            onEnter:{
                uri: "switch-flip.wav",
                attributionUri: "https://www.freesound.org/people/ianstargem/sounds/278205/"
            }
        },
        ambient:{
            uri:"Nash_Library_Audio.mp3",
            url:"Zurn_Science_Center.mp3",
            attributionUri:"Nash_Library_Audio.mp3",
            loop:true,
            volume: 0.20
        }

    }

    var setting = new SoundEffect(newSetting);
    await setting.save();

    const c = await SoundEffect.find();
    console.log('SoundEffects: ' + c);


}




//seed Content 
async function seedContent() {
    console.log("Seeding Content to " + mongoose.connection.name + '...');
    let firstPhoto = await Photo.findOne({name: "11111"});
    let photos = await Photo.findOne({name: "11111"});
    let soundEffects = SoundEffect.findOne({uri: "switch-flip.wav"})

    const content = {
        nav_icon: "gannon_icon.png",
        firstPhotoId: firstPhoto._id,
        soundEffects: soundEffects._id,
        photos: [photos._id]

    }

    var contents = new Content(content)
    await contents.save()
    const d = await Content.find();
    console.log('Content: ' + d);

}

//execute functions

seedSoundEffects()
seedContent()


