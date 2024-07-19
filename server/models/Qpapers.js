const mongoose=require('../config/connection');

const fileSchema = new mongoose.Schema({
    pdffile: [{
    type:String,
    path: String}],
    semester:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
  });

  module.exports = mongoose.model('qpapers',fileSchema)