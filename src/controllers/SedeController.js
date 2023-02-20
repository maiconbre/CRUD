const Sede = require('../models/Sede');


module.exports = {
    async index(req, res) {
        const sedes = await Sede.findAll();

        return res.json(sedes);

    },
    async store(req, res) {
        const { equipe, retorno, cidade, bairro, cep } = req.body;

        const sede = await Sede.create({ equipe, retorno, cidade, bairro, cep })

        return res.json(sede);
    },
    async update(req, res) {
        const { id } = req.params;
        const { equipe, retorno, cidade, bairro, cep } = req.body;

        const sede = await Sede.findByPk(id);

        if (!sede) {
            return res.status(400).json({ error: 'Falha ao atualizar sede' });
        }

        const updatedSede = await sede.update({ equipe, retorno, cidade, bairro, cep });

        return res.json(updatedSede);
    },
    async delete(req, res) {
        const { id } = req.params;

        const sede = await Sede.findByPk(id);

        if (!sede) {
            return res.status(400).json({ error: 'Sede não encontrada' });
        }

        await sede.destroy();
        /* const Creator = mxxcxn was here */
        return res.send();
    }
}