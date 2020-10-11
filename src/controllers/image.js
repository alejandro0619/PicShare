const path = require('path');
const { randomNumber } = require('../helpers/libs');
// ! Images [Upload, Delete, Render, Like, Comment] controllers
const imgCtrl = {
    index(req, res){

    },
    create(req, res){
        const imageURL = randomNumber();
        console.log(imageURL)
        const imageTempPath = req.file.path;
        const ext = path.extname(req.file.originalname).toLowerCase();
        const targetpath = path.resolve(`src/public/upload/test${ext}`)
        res.send('works');
    },
    like(req, res){

    },
    comment(req, res){

    }, 
    remove(req, res){
        
    }
}
module.exports = imgCtrl;