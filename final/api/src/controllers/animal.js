const express = require('express')

const Animal = require('../models/Animal')

const router = express.Router()

// CADASTRA NOVO ANIMAL
router.post("/new", async (req, res) => {
    try {
        if (req.body.name === "" || req.body.species === "" || req.body.gender === "" || req.body.imgUrl === "" || req.body.status === "") {
            return res.status(400).json({ mensagem: "Os dados não foram preenchidos corretamente" })
        }
        else {
            const animal = await Animal.create(req.body);
            return res.status(201).send({ animal });
        }
    } catch (err) {
        return res.status(400).send({ erro: "Cadastro Falhou" });
    }
});

// LISTA TODOS OS ANIMAIS
router.get("/", async (_req, res) => {
    try {
        const animals = await Animal.find();
        if (animals.length < 1) {
            return res.status(404).json({ mensagem: "Nenhum animal cadastrado" })
        }
        else {
            res.header({
                "Accept-Charset": "utf-8",
                "Content-Language": "pt-br",
                "Access-Control-Allow-Origin": "*"
            })
            return res.send({ animals })
        }
    } catch (err) {
        return res.status(400).send({ erro: "Listagem Falhou" });
    }
});

// BUSCA ANIMAL PELO NOME
router.get("/:animalName", async (req, res) => {
    try {
        if (req.params.animalName === "") {
            const animals = await Animal.find();
            return res.send({ animals });
        }
        else {
            const animal = await Animal.find({ name: req.params.animalName });
            if (animal.length < 1) {
                return res.status(404).json({ mensagem: "Animal não encontrado, revise a escrita para ver se está correta" })
            } else {
                return res.send({ animal });
            }
        }

    } catch (err) {
        return res.status(400).send({ erro: "Busca Falhou" });
    }
});

// ATUALIZA INFORMAÇÕES DO ANIMAL
router.patch("/update/:animalId", async (req, res) => {
    try {
        const { status } = req.body;

        if (status !== "Em recuperação" && status !== "Saudável" && status !== "A caminho") {
            return res.status(400).json({
                mensagem: "O status deve ser preenchido com uma das seguintes opções",
                opções: ["Em recuperação", "Saudável", "A caminho"]
            })
        } else {
            const animal = await Animal.findByIdAndUpdate(
                req.params.animalId,
                { status },
                { new: true }
            );
            return res.send({ animal });
        }
    } catch (err) {
        return res.status(400).send({ erro: "Atualização Falhou" });
    }
});

// DELETA ANIMAL
router.delete("/remove/:animalId", async (req, res) => {
    try {
        await Animal.findByIdAndRemove(req.params.animalId);
        return res.json({ mensagem: "Animal removido com sucesso!" });
    } catch (err) {
        return res.status(400).send({
            erro: "Remoção Falhou",
            mensagem: "Provavelmente o ID inserido não se refere a um animal existente"
        });
    }
});

module.exports = app => app.use('/animal', router)