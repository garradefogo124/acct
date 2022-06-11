import { MongoClient } from 'mongodb'

// CONEXÃO URL
const remote = "mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/?retryWrites=true&w=majority"

// MONGO CLIENT 

const client = new MongoClient(remote);

async function run() {
    await client.connect();

    const db = client.db("fatec")

    const collection = db.collection("alunos")

    //const result = await collection.deleteMany({ idade: { $regex: 19} })

    const result = await collection.deleteOne({ nome: "Vitor" })

    console.log(result)

    return "Done."
}

run()
    .then(console.log)
    .catch(console.error)