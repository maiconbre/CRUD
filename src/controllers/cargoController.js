const Cargo = require('../models/Cargo');
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'cargos' }
    });

    /*const cargos = await Cargo.findAll({ where: { user_id } });*/

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { profissao, data } = req.body;

    const cargo_usuario = await User.findByPk(profissao);

    if (!cargo_usuario) {
      return res.status(400).json({ error: 'ERRO! Cargo não encontrado.' });
    }

    const cargo = await Cargo.create({
      profissao,
      data,
      user_id,
    });

    return res.json(cargo);
  },

  async update(req, res) {
    const { id } = req.params;
    const { profissao } = req.body;

    const cargo = await Cargo.findByPk(id);

    if (!cargo) {
      return res.status(400).json({ error: 'Falha ao atualizar o cargo.' });
    }

    const updatedCargo = await cargo.update({ profissao });

    return res.json(updatedCargo);
  },

  async delete(req, res) {
    const { id } = req.params;
    const { profissao } = req.body;

    const cargo = await Cargo.findByPk(id);

    if (!cargo) {
      return res.status(400).json({ error: 'Cargo não encontrado.' });
    }

    await cargo.destroy();
    /* const Creator = mxxcxn was here */
    return res.send(`Cargo ${id} deletado.`);
  }


};