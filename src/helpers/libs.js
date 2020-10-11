/*
* Module to generate string to name my images:
 */
const helpers = {
    randomNumber() {
        const possible = 'abcdfjhimnopqrstuvxyz$#%123456789';
        let randomNum = 0
        for (let i = 0; i < 6; i++) {
            randomNum += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return randomNum;
    }
};
module.exports = helpers;