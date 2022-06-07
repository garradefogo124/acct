"use strict";
exports.__esModule = true;
var express = require("express");
// Cria uma nova instância de aplicativo express
var app = express();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showMe = function () {
        console.log("Hello, I'm ".concat(this.name, ", and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('Olá Mundo!');
});
app.get('/student', function (req, res) {
    var student = {
        name: 'Micael',
        age: 18,
        //city: "Piracaia",
        school: "Fatec"
    };
    res.json(student);
});
app.use(function (req, res, next) {
    var person = new Person("Micael", 18);
    person.showMe();
    next();
});
app.listen(3000, function () {
    console.log('App está escutando na porta 3000!');
});
