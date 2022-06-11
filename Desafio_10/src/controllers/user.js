const express = require('express')

const User = require('../models/User')

const router = express.Router()

// CADASTRA USUÁRIO
router.post('/register', async (req, res) => {
    const { email } = req.body
    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User already exists' })

        const user = await User.create({ ...req.body, Course: req.courseId })

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Registration Failed' })
    }
})

// BUSCA TODOS OS USUÁRIOS
router.get('/', async (_req, res) => {
    try {
        const users = await User.find().populate('course');
        return res.send({ users })
    } catch (err) {
        return res.status(400).send({ error: 'Search Failed' })
    }
})

// BUSCA PELO ID DO USUÁRIO
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('course');
        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Search Failed' })
    }
})

// BUSCA PELO NOME
router.get('/name/:name', async (req, res) => {
    try {
        const user = await User.find({ name: req.params.name }).populate('course');
        return res.send({ user })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Search Failed' })
    }
})

// BUSCA POR ID DO CURSO
router.get('/course/:courseId', async (req, res) => {
    try {
        const user = await User.find({ course: req.params.courseId }).populate('course');
        return res.send({ user })
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Search Failed' })
    }
})

// ATUALIZA INFORMAÇÕES DO USUÁRIO
router.put('/change/:userId', async (req, res) => {

    try {
        const { name, lastname, age } = req.body
        const user = await User.findByIdAndUpdate(req.params.userId, { name, lastname, age, course: req.courseId }, { new: true })

        return res.send({ user })
    } catch (err) {
        return res.status(400).send({ error: 'Update Failed' })
    }
})

// DELETAR USUÁRIOS
router.delete('/remove/:userId', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId).populate('course');
        return res.send()
    } catch (err) {
        return res.status(400).send({ error: 'Delete Failed' })
    }
})

module.exports = app => app.use('/user', router)