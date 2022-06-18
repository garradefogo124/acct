const express = require('express')

const Animal = require('../models/Animal')

const router = express.Router()

// CADASTRA NOVO ANIMAL
router.post("/new", async (req, res) => {
    try {
        const animal = await Animal.create(req.body);
        return res.send({ animal });
    } catch (err) {
        return res.status(400).send({ error: "Cadastro Falhou" });
    }
});

// LISTA TODOS OS ANIMAIS
router.get("/", async (_req, res) => {
    try {
        const animals = await Animal.find();
        return res.send({ animals });
    } catch (err) {
        return res.status(400).send({ error: "Listagem Falhou" });
    }
});

// BUSCA ANIMAL PELO NOME
router.get("/:animalName", async (req, res) => {
    try {
        const animal = await Animal.find({ name: req.params.animalName });
        return res.send({ animal });
    } catch (err) {
        return res.status(400).send({ error: "Busca Falhou" });
    }
});

// ATUALIZA INFORMAÇÕES DO ANIMAL
router.put("/update/:animalId", async (req, res) => {
    try {
        const { status, imgUrl } = req.body;
        const animal = await Animal.findByIdAndUpdate(
            req.params.animalId,
            { status, imgUrl },
            { new: true }
        );

        return res.send({ animal });
    } catch (err) {
        return res.status(400).send({ error: "Atualização Falhou" });
    }
});

// DELETA ANIMAL
router.delete("/remove/:animalId", async (req, res) => {
    try {
        await Animal.findByIdAndRemove(req.params.animalId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: "Remoção Falhou" });
    }
});

module.exports = app => app.use('/animal', router)