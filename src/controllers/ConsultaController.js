const Consulta = require('../models/Constulta')
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { medico, receita, data } = req.body;
    
        const user = await User.findByPk(user_id);
    
        if (!user) {
          return res.status(400).json({ error: 'User not found' });
        }
    
        const consulta = await Consulta.create({
          medico,
          receita,
          data,
          user_id,
        });
    
        return res.json(consulta);
      }
    };