const { Users } = require('../models');
module.exports = {
    save: async (req, res) => {
        let data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const result = await Users.create(data);

        res.redirect('/');
    }
}