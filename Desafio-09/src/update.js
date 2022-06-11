import { MongoClient } from 'mongodb'

// CONEXÃO URL
const remote = "mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/?retryWrites=true&w=majority"

// MONGO CLIENT 

const client = new MongoClient(remote);

async function run() {
    await client.connect();

    const db = client.db("fatec")

    const collection = db.collection("alunos")

    //const result = await collection.updateMany({ nome: "Micael" }, { $inc: { idade: 6 } }])

    const result = await collection.updateOne({ nome: "Micael" }, { $set: { idade: 18 } })

    console.log(result)

    return "Done."
}

run()
    .then(console.log)
    .catch(console.error)