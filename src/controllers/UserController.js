const User = require('../models/User');
const Cargo = require('../models/Cargo')
const Endereco = require('../models/Endereco')
const Tech = require('../models/Tech')


module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);

    },
    async indexOne(req, res){
        const { id } = req.params;
      
        const user = await User.findByPk(id, {
            include: [
              { 
                model: Cargo, 
                as: 'cargos',
                attributes: ['profissao'] // somente a coluna "profissao"
              },
              { 
                model: Endereco, 
                as: 'enderecos',
                attributes: ['cep','cidade','bairro','estado'] // somente as colunas desejadas
              },
              { 
                model: Tech, 
                as: 'techs',
                attributes: ['espec'], //somente a coluna espec
                through: { attributes: [] } }
            ]
        });
      
        if (!user) {
          return res.status(400).json({ error: 'Usuário não encontrado' });
        }
      
        return res.json(user); //Isso irá retornar as informações do usuário e de todas as tabelas relacionadas.
      },
      
    async store(req, res) {
        const { nome, email, github } = req.body;

        const user = await User.create({ nome, email, github })

        return res.json(user);
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, email, github } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Falha ao atualizar usuário' });
        }

        const updatedUser = await user.update({ nome, email, github });

        return res.json(updatedUser);
    },

    async delete(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();
        /* const Creator = mxxcxn was here */
        return res.send();
    }
}
