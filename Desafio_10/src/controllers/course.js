const express = require('express')

const Course = require('../models/Course')

const router = express.Router()

router.post('/register', async (req, res) => {
    const { name } = req.body
    try {
        if (await Course.findOne({ name }))
            return res.status(400).send({ error: 'Course already exists' })

        const course = await Course.create(req.body)

        return res.send({ course })
    } catch (err) {
        return res.status(400).send({ error: 'Registration Failed' })
    }
})

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        return res.send({ courses })
    } catch (err) {
        return res.status(400).send({ error: 'Search Failed' })
    }
})

router.get('/:courseId', async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        return res.send({ course })
    } catch (err) {
        return res.status(400).send({ error: 'Search Failed' })
    }
})

router.get('/week/:day', async (req, res) => {
    try {
        const course = await Course.find({ day: req.params.day });
        return res.send({ course })
    } catch (err) {
        return res.status(400).send({ error: 'Search Failed' })
    }
})

// MUDA O DIA DO CURSO
router.put('/change/:courseId', async (req, res) => {

    try {
        const { name, day } = req.body
        const course = await Course.findByIdAndUpdate(req.params.courseId, { name, day }, { new: true })

        return res.send({ course })
    } catch (err) {
        return res.status(400).send({ error: 'Update Failed' })
    }
})

// DELETAR O CURSO
router.delete('/remove/:courseId', async (req, res) => {
    try {
        await Course.findByIdAndRemove(req.params.courseId);
        return res.send()
    } catch (err) {
        return res.status(400).send({ error: 'Delete Failed' })
    }
})

module.exports = app => app.use('/course', router)