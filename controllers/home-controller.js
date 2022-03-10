const { contactFormValidator } = require('../validation/contact-form-validator');

const homeController = {
    index: (req, res) => {
        console.log('page', 'home');
        res.render('home/index');
    },
    about: (req, res) => {
        console.log('page', 'about');
        res.render('about/index');
    },
    contact: (req, res) => {
        console.log('page', 'contact');
        res.render('contact/index');
    },
    contactFormSubmitted: (req, res) => {
        console.log(req.body);
        console.log(req.file);
        if (!contactFormValidator.isValidSync(req.body)) {
            res.redirect('/contact');
            return;
        }
        res.render('contact/form-submitted', { data: req.body });
    },
};

module.exports = homeController;