const Cargo = require('../models/Cargo');

module.exports = {
    async index(req, res) {
        const users = await Cargo.findAll();

        return res.json(users);

    },
    async store(req, res) {
        const { profissao } = req.body;

        const user = await Cargo.create({ profissao })

        return res.json(user);
    },

    async update(req, res) {
        const { id } = req.params;
        const { profissao } = req.body;
    
        const user = await Cargo.findByPk(id);
    
        if (!user) {
          return res.status(400).json({ error: 'Falha ao atualizar o cargo.' });
        }
    
        const updatedUser = await user.update({ profissao });
    
        return res.json(updatedCargo);
      },

      async delete(req, res) {
        const { id } = req.params;

        const user = await Cargo.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Cargo não definido.' });
        }

        await user.destroy();
                                                                                                            /* const Creator = mxxcxn was here */
        return res.send();
    }
}