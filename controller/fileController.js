const express = require('express');
const uploadfile = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth')
const path = require('path')
const mymodel = require('../model/fileModel')

let storage= multer.diskStorage({
    destination: path.join(__dirname,"../uploads"),
    })
const uploads = multer({
    storage : storage,    
    })

uploadfile.post('/add',auth,uploads.single('image'),(req,res)=>{
    const Newfile = new mymodel({
        file: req.file.filename,
        structure:req.file.destination ,
        userId:req.userId
    });
    try {               
        Newfile.save();
        res.status(201).json({Newfile});                 
        }catch(error){
            res.status(400).json({msg: "not save file"})
        }    
})
uploadfile.get('/get/:id',auth,async(req,res)=> {
    const id = req.params.id;
    try{
        const files = await mymodel.find({userId:id});
        console.log(files)
        res.status(200).send({success: true, msg: 'categories ', data : files})

    }catch(error){
        res.status(400).json({massage: "Some thing went wrong in get file"})
        console.log(error)
    }
})

uploadfile.get('/search/:id/:name', auth,async(req,res)=>{
    const id = req.params.id;
    const file_name = req.params.name;
    try{
        const file = await mymodel.find({userId:id,file:file_name})
        if(id!==req.userId){
            res.status(200).send({msg : "Invalid User"})
            }
        else if (file.length == 0 ){
            res.status(200).send({msg :"File not found"})
        }
        else{res.status(200).send({msg : "Files",data:file})}
        

    }catch(error){
        res.status(400).send({msg : "Unable to search"})
    }
})

uploadfile.get
module.exports ={uploadfile}




























// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000
// require("../db/conn");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// 
// const multer = require('multer');
// const path = require('path')
// const mongoose = require("mongoose");
// const myschema = mongoose.Schema({
//     image:{
//         type : String
//     },
//     structure:{
//         type: String
//     }
// }, {timestamps : true});



// let mymodel = mongoose.model('table',myschema)
// let storage= multer.diskStorage({
//     destination: path.join(__dirname,"../uploads"),
//     filename:(req,file,cb)=>{
//         cb(null, Date.now()+ file.originalname)
//     }
// })
// const uploads = multer({
//     storage : storage,
//     fileFilter:(req,file,cb)=>{
//         if (
//             file.mimetype == 'image/jpeg' ||
//             file.mimetype == 'image/jpg' ||
//             file.mimetype == 'image/pngf' ||
//             file.mimetype == 'image/jpeg' )
//             {
//                 cb(null, true)
//             }
//             else{
//                 cb(null,false);
//                 cb(new Error('Only jpeg, jpg , png and gif Image allow'))
//             }
//         }
//     })
// app.post('/upload',uploads.single('image'),(req,res)=>{
//     const Newfile = new mymodel({
//         image: req.file.filename,
//         structure:__dirname
//     });
//     try {               
//         Newfile.save();
//         res.status(201).json({Newfile});                 
//         }catch(error){
//             res.status(400).json({msg: "not save file"})
//         }    
// })
// app.get('/', (req, res)=>{
//     res.send("hii hello");
// });
// app.get('/file', async(req,res)=>{
//     try{
//         const notes = await noteModel.find({userId:req.userId})
//         res.status(201).json(notes)
//         console.log(notes)
//     }catch(error){
//         console.log(error)
//         res.status(500).json({massage: "Some thing went wrong"})
//     }
    
// })
// app.listen(PORT, ()=> {
//     console.log("your request is listen on port"+ PORT)
// })
