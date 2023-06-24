const express = require('express');
const uploadfile = express.Router();
const multer = require('multer');
const path = require('path')
const file = require('../model/fileModel')

let storage= multer.diskStorage({
    destination: path.join(__dirname,"../uploads"),
    })
const uploads = multer({
    storage : storage,    
    })

    uploadfile.post('/add', auth, uploads.single('image'), async (req, res) => {
    // const  {filename, path, filePath } = req.file;
    const  virtualPath  = req.body;
    
    try {
    const newFile = new file({
    fileName: req.file.filename,
    pathName: req.file.destination,
    userId: req.userId,
    virtualPath: virtualPath
    });
    await newFile.save();
    res.status(201).json({ file: newFile });
    } 
    catch (error) {
    res.status(400).json({ error: 'Unable to save file' });
        }
    });

    









