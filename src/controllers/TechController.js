const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                attributes: ['espec'],
                through: {
                    attributes: []
                }
            }
        })

        return res.json(user.techs);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { espec } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: "Usuario nao encontrado." })
        }

        const tech = await Tech.findOrCreate({
            where: { espec }
        });
        
        await user.addTech(tech);

        return res.json(tech);
    },
    async delete(req, res) {
        const { user_id } = req.params;
        const { espec } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }

        const tech = await Tech.findOne({
            where: { espec }
        });

        await user.removeTech(tech);

        return res.json();
    }
}