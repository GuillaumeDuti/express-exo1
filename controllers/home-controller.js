const jsonCompute = require('../utils/json-utils');
const { contactFormValidator } = require('../validation/contact-form-validator');

const homeController = {
    index: async (req, res) => {
        const data = await jsonCompute("data.json");
        console.log(data);
        console.log('page', 'home');
        res.render('home/index', { data });
    },
    people: async (req, res) => {
        console.log('page', 'people');
        const id = req.params.id;
        const data = await jsonCompute("data.json");
        let member = null;
        data.forEach(person => {
            console.log(person);
            if (person.id == id) {
                member = person;
            }

        });
        if (!member) return res.sendStatus(404);
        res.render('people/index', { member });
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