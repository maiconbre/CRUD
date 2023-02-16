const Endereco = require('../models/Endereco')
const User = require('../models/User')

module.exports = {
  async index(req, res) {   //metodo get
    const { user_id } = req.params; 

    const user = await User.findByPk(user_id, {      //metodo get user_id e relacionando a tabela enderecos
      include: { association: 'enderecos' }   
    });
    return res.json(user);          //retorno da tabela usuarios com dados dos endereços
  },

  async store(req, res) {       //metodo post 
    const { user_id } = req.params;
    const { cep, cidade, bairro, estado } = req.body;      //informa o corpo da tabela 

    const user = await User.findByPk(user_id);      //Busca o id do usuario para adicionar dados 

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const endereco = await Endereco.create({      //informa os atributos a serem adicionados 
      cep,
      cidade,
      bairro,
      estado,
      user_id,
    });

    return res.json(endereco);
  },

  async update(req, res) {            //metodo put
    const { id } = req.params;
    const { cep, cidade, bairro, estado } = req.body;     //informa o corpo da tabela

    const endereco = await Endereco.findByPk(id);       //busca o id do endereço para edita-lo

    if (!endereco) {
      return res.status(400).json({ error: 'Falha ao atualizar usuário' });
    }

    const updatedEndereco = await endereco.update({ cep, cidade, bairro, estado });     //informa os atributos a serem editados 

    return res.json(updatedEndereco);
  },

  async delete(req, res) {
    const { id } = req.params;

    const endereco = await Endereco.findByPk(id);               //busca o id do endereço para apaga-lo

    if (!endereco) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    await endereco.destroy();
   
    return res.send();
  }

};


