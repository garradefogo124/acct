import express = require('express');

// Cria uma nova instância de aplicativo express
const app: express.Application = express();

interface IPerson {
    name: string;
    age: number;
    city?: string;
}

interface IStudent extends IPerson {
    school: string;
}

class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public showMe() {
        console.log(`Hello, I'm ${this.getName()}, and I'm ${this.age} years old.`)
    } 

    private getName() {
        return this.name
    }
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', function (req, res) {
  res.send('Olá Mundo!');
});

app.get('/student', function (req, res) {
    const student: IStudent = {
        name: 'Micael',
        age: 18,
        //city: "Piracaia",
        school: "Fatec"
    }
    res.json(student)
});

app.use(function (req, res, next){
    const person = new Person("Micael", 18);

    person.showMe()

    next()
});

app.listen(3000, function() {
  console.log('App está escutando na porta 3000!');
});
