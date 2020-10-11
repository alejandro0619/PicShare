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
         // * Generates a random names:
        const imageURL = randomNumber();
        /*
        * query the database with the name generated above
        * 
        */
        const images = await Image.find({
            filename: imageURL
        });

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
        } else{
            await fs.unlink(imageTempPath);
            res.status(500).json({
                error: 'Only images are allowed, please try again.'
            });
        };

    },
    like(req, res){

    },
    comment(req, res){

    }, 
    remove(req, res){
        
    }
}
module.exports = imgCtrl;