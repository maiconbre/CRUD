const Endereco = require('../models/Endereco')
const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'endereco' }
    });

    /*const consultas = await Consulta.findAll({ where: { user_id } });*/

    return res.json(user);
  },

    async store(req, res) {
        const { user_id } = req.params;
        const { cep, cidade, bairro, estado, data } = req.body;
    
        const user = await User.findByPk(user_id);
    
        if (!user) {
          return res.status(400).json({ error: 'User not found' });
        }
    
        const consulta = await Endereco.create({
          cep,
          cidade,
          bairro,
          estado,
          data,
          user_id,
        });
    
        return res.json(endereco);
      }
    };