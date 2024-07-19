const blogsmodel=require('../models/blogs');



module.exports.setblogsinfo=async (req,res)=>{
    console.log(req.file,req.body,16)
    const title=req.body.title;
    const desc=req.body.desc;
    const imageurl=req.file.path
    if (!title || !desc || !imageurl){
        return res.send({code:400,message:'bad request'})
    
    }
    const entry=new blogsmodel({title:title,desc:desc,imageurl:imageurl})
    const success=await entry.save()
    if (success){
        return res.send({code:200,message:"add success",id:entry._id})
    }else{
    return res.send({code:500,message:'error'})
    }
}

module.exports.getblogsinfo=async (req,res)=>{
    const _data=await blogsmodel.find({})
    if (_data){
        return res.send({code:200,message:'success',data:_data})
    }else{
        return res.send({code:500,message:'service error'})
    }
    
}


module.exports.getsinglebloginfo=async (req,res)=>{
    const __data= await blogsmodel.findById(req.params.id)
    if (__data){
        return res.send({code:200,message:'success',data:__data})
    }
    else{
        return res.send({code:500,message:'service error'})
    }
}

