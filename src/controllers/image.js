// ! Importing modules:
const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');
 const  { Image } = require('../models/')
// ! Images [Upload, Delete, Render, Like, Comment] controllers:

const imgCtrl = {
    
    index(req, res){

    },
    /* 
    * Upload images (rename it to upload folder if it's an image)
    *If it's not, send error message:
    */
     async create(req, res){
        const imageURL = randomNumber();
        console.log(imageURL);
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetPath = path.resolve(`src/public/upload/${imageURL}${ext}`);
        if(ext ==='.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
           await fs.rename(imageTempPath, targetPath);
          const newImg = new Image({
               title: req.body.title,
               filename: imageURL + ext,
               description: req.body.description,
           });
           // * Save the img in the DB:
           const imgSaved = await newImg.save();
           //
           res.status(201).redirect('/');
           console.log(newImg);
           console.log(imgSaved)
        }
        
        
    },
    like(req, res){

    },
    comment(req, res){

    }, 
    remove(req, res){
        
    }
}
module.exports = imgCtrl;