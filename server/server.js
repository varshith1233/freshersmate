const express=require('express')
const app=express()
const port=8000;
const blogs=require('./controller/blogs')
const uploadpdfdata = require('./controller/Uploadpdf')
const users=require('./controller/Userdetails')
const bodyparser= require('body-parser');
const cors=require('cors')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
app.use('/uploads',express.static('uploads'))

const uploadpdf = multer({ dest: 'uploadpdf/' })
app.use('/uploadpdf',express.static('uploadpdf'))



app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors())

app.post('/blogs',upload.single('image'),blogs.setblogsinfo)

app.post('/uploaddata',uploadpdf.single('pdffile'),uploadpdfdata.setpdfdata)

app.get('/uploaddata',uploadpdfdata.getpdfdata)

app.get('/blogs',blogs.getblogsinfo)

app.get('/b/:id',blogs.getsinglebloginfo)

app.get('/p/:id',uploadpdfdata.getsinglepdfdata)

app.post('/register',users.registeruserdetails)

app.post('/login',users.checklogindetails)

app.get('/login',users.getlogindetails)

app.get('/',(req,res)=>{
    res.send("Hllo")
})

app.listen(port,(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log(`Server connect at ${port}`)
    }
})