const mongoose = require('../database')

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    species: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        enum: ["M", "F"],
        require: true,
    },
    imgUrl: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        enum: ["Saudável", "Em Recuperação", "A caminho"],
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;