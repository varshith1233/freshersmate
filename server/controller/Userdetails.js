const usermodel=require('../models/userdetails')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

module.exports.registeruserdetails = async(req,res)=>{
    console.log(req.body)
    const username=req.body.username
    const email=req.body.email
    const password=req.body.password
        
    if (!username || !email || !password){
        return res.send({code:400,message:'bad request'})
    }
    const entry= new usermodel({username:username,email:email,password:password})
    const success = await entry.save()
    if (success){
        return res.send({code:200,message:"add success"})
        }
    else{
        return res.send({code:500,message:'error'})
    }
}

module.exports.checklogindetails = async (req,res)=>{
    const {username,password}=req.body
    const userexists = await usermodel.findOne({username:username})
    if (userexists){
        if (userexists.password !== password){
            return res.send({code:400,message:"username or password wrong"})
        }
        console.log(userexists);
            const _token = jwt.sign({...userexists},'PRIV_123')
            return res.send({code:200,message:"login success",token:_token,user_type:userexists.type,username:username});
        
    }else{
        return res.send({code:500,message:"service error"})
    }
}

module.exports.getlogindetails = async (req,res) =>{
    
}