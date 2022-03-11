const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/home-controller');

const multer = require('multer');
const upload = multer({ dest: 'storage' });



homeRouter.get(['/', '/home'], homeController.index);
homeRouter.get('/people/:id', homeController.people);
homeRouter.get('/about', homeController.about);
homeRouter.get('/contact', homeController.contact);
homeRouter.post('/contact', upload.single('myFile'), homeController.contactFormSubmitted);

module.exports = homeRouter;