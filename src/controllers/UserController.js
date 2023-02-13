const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email })

        return res.json(user);
    }
}