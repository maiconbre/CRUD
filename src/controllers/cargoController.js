const Cargo = require('../models/Cargo');
const User = require('../models/User')

module.exports = {

  /* MÉTODO  GET - funfandoo */

  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'cargos'
      }
    });

    if (!user) {
      return res.status(400).json({ error: 'ERRO! Usuário não encontrado.' });
    }

    return res.json(user);
  },



  /* MÉTODO POST - funfando */

  async store(req, res) {
    const { user_id } = req.params;
    const { profissao } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'ERRO! Usuário não encontrado.' });
    }

    const cargo = await Cargo.create({
      profissao,
      user_id,
    });

    return res.json(cargo);
  },


  /* MÉTODO PUT - funfando */

  async update(req, res) {
    const { user_id } = req.params;
    const { profissao } = req.body;

    const user = await Cargo.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Falha ao atualizar o cargo.' });
    }

    const updatedCargo = await user.update({ profissao });

    return res.json(updatedCargo);
  },

  /* MÉTODO DELETE - funfando */

  async delete(req, res) {
    const { user_id } = req.params;

    const cargo = await Cargo.findByPk(user_id);

    if (!cargo) {
      return res.status(400).json({ error: 'Cargo não encontrado.' });
    }

    await cargo.destroy();

    return res.send(`Cargo do usuário número ${user_id} deletado.`);
  }

};