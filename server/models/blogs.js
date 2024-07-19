const mongoose=require('../config/connection');

const blogsdata=mongoose.Schema({
    title:{
        type:String,
    },
    desc:{
        type:String
    },
    imageurl:{
        type:String
    }

})

module.exports = mongoose.model('blogs',blogsdata)