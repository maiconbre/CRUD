const Endereco = require('../models/Endereco')
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params; //poe so id

    const user = await User.findByPk(user_id, { //endereco
      include: { association: 'enderecos' }
    });

    /*const endereco = await Consulto.findAll({ where: { user_id } });*/

    return res.json(user);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { cep, cidade, bairro, estado } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const endereco = await Endereco.create({
      cep,
      cidade,
      bairro,
      estado,
      user_id,
    });

    return res.json(endereco);
  },
  
  async update(req, res) {
    const { id } = req.params;
    const { cep, cidade, bairro, estado } = req.body;

    const endereco = await Endereco.findByPk(id);

    if (!endereco) {
      return res.status(400).json({ error: 'Falha ao atualizar usuário' });
    }

    const updatedEndereco = await endereco.update({ cep, cidade, bairro, estado });

    return res.json(updatedEndereco);
  },

  async delete(req, res) {
    const { id } = req.params;

    const endereco = await Endereco.findByPk(id);

    if (!endereco) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    await endereco.destroy();
                                                                                                        /* const Creator = mxxcxn was here */
    return res.send();
}
  
};