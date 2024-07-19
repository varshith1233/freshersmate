const uploadpdfmodel = require('../models/Qpapers');

module.exports.setpdfdata = async (req,res)=>{
    console.log(req.file,req.body,16);
    const semester=req.body.semester;
    const branch=req.body.branch;
    const subject=req.body.subject;
    const pdffile=req.file.path;
    if (!semester || !branch || !subject || ! pdffile){
        return res.send({code:400,message:'bad request'})
    }
    const entry = new uploadpdfmodel({semester:semester,branch:branch,subject:subject,pdffile:pdffile})
    const success = await entry.save()
    if (success){
        return res.send({code:200,message:'add success',id:entry._id})
    }
    else{
        return res.send({code:500,message:'error'})
    }


}

module.exports.getpdfdata = async (req,res)=>{
    const _data = await uploadpdfmodel.find({})
    if (_data){
        return res.send({code:200,message:'add success',data:_data})
    }
    else{
        return res.send({code:500,message:'service error'})
    }

}

module.exports.getsinglepdfdata = async (req,res)=>{
    const __data=await uploadpdfmodel.findById(req.params.id)
    if(__data){
        return res.send({code:200,message:'add success',data:__data})
    }
    else{
        return res.send({code:500,message:'service error'})
    }
}