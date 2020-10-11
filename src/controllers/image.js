// ! Importing modules:
const path = require('path');
const { randomNumber } = require('../helpers/libs');
const fs = require('fs-extra');
const { Image } = require('../models/')

// ! Images [Upload, Delete, Render, Like, Comment] controllers:

const imgCtrl = {

    index(req, res) {

    },
     create(req, res) {
        /*
        * Create a function to saveImages throught POST method use in / route by a form.
        * Generate random string to name the images.
        * Check if the name of the images is repeated, if yes: execute saveImage as recursion. If not: save it.
        * Check if the file is an image.
        * move it from temp folder to upload folder.
        * save at DB using a pre-created schema.
        * set the status code, then redirect to /
        ! If the file is not an image, send error message and internal server error.
        */
        const saveImage = async () => {

            const imageURL = randomNumber();

            const images = await Image.find({
                filename: imageURL
            });

            if (images.length > 0) {
                saveImage()
            } else {
                const imageTempPath = req.file.path;
                const ext = path.extname(req.file.originalname).toLowerCase();
                const targetPath = path.resolve(`src/public/upload/${imageURL}${ext}`);
                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                    await fs.rename(imageTempPath, targetPath);
                    const newImg = new Image({
                        title: req.body.title,
                        filename: imageURL + ext,
                        description: req.body.description,
                    });

                    const imgSaved = await newImg.save();
                    res.status(201).redirect('/');
                    console.log(newImg);
                } else {
                    await fs.unlink(imageTempPath);
                    res.status(500).json({
                        error: 'Only images are allowed, please try again.'
                    });
                };
            }
        };
        saveImage()
    },
    like(req, res) {

    },
    comment(req, res) {

    },
    remove(req, res) {

    }
}
module.exports = imgCtrl;