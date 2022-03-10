const express = require('express');
const homeRouter = require('./routes/home-router');

// Création du server 
const app = express();

// middleware pour formulaire 
app.use(express.urlencoded({ extended: true }));

// Setup du dossier public 
app.use(express.static('public'));

// Setup du moteur de views EJS 
app.set('view engine', 'ejs');
app.set('views', './views/pages');

// Setup des routes 
app.use(homeRouter);

// Ecoute du server sur le port 2022
app.listen(2022, () => {
    console.log('coucou server');
});