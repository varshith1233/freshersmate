const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Fmate')
.then(()=>
{
  console.log("succesfully connected to db")
})
.catch((err)=>
{
  console.log(err)
})

module.exports = mongoose;