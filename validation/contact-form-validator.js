const yup = require('yup');

const contactFormValidator = yup.object().shape({
    pseudo: yup.string().required(),
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string().required().email(),
    message: yup.string().required()
});

module.exports = { contactFormValidator };