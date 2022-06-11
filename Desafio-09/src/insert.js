import { MongoClient } from 'mongodb'

// CONEXÃO URL
const remote = "mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/?retryWrites=true&w=majority"

// MONGO CLIENT 

const client = new MongoClient(remote);

async function run() {
    await client.connect();

    const db = client.db("fatec")

    const collection = db.collection("alunos")

    //const result = await collection.insertOne({ name: "Micael", age: 18 })

    const result = await collection.insertMany([
        {
            nome: "Micael",
            idade: 17,
            curso: "ADS",
            semestre: "1 Semestre",
            telefone: "11 95637-5966",
        },
        {
            nome: "Fernando",
            idade: 18,
            curso: "ADS",
            semestre: "1 Semestre",
            telefone: "11 98654-5966",
        },
        {
            nome: "Mayara",
            idade: 19,
            curso: "ADS",
            semestre: "1 Semestre",
            telefone: "11 94737-5987",
        },
        {
            nome: "Vitor",
            idade: 38,
            curso: "GTI",
            semestre: "5 Semestre",
            telefone: "11 91120-7980",
        },
        {
            nome: "Yudi",
            idade: 23,
            curso: "GF",
            semestre: "3 Semestre",
            telefone: "4002-8922",
        },
        {
            nome: "Deivid",
            idade: 18,
            curso: "ADS",
            semestre: "1 Semestre",
            telefone: "11 99943-2103",
        },
        {
            nome: "Camila",
            idade: 72,
            curso: "GE",
            semestre: "6 Semestre",
            telefone: "1234-5678",
        },
        {
            nome: "José",
            idade: 40,
            curso: "GE",
            semestre: "3 Semestre",
            telefone: "11 94704-8795",
        },
        {
            nome: "Sandra",
            idade: 20,
            curso: "ADS",
            semestre: "2 Semestre",
            telefone: "11 99087-1212",
        },
        {
            nome: "Jorge",
            idade: 27,
            curso: "LOG",
            semestre: "6 Semestre",
            telefone: "11 99857-2456",
        }
    ])
    console.log(result)

    return "Done."
}

run()
    .then(console.log)
    .catch(console.error)