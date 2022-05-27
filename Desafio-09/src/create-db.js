import { MongoClient } from 'mongodb'

// CONEXÃO URL
const remote = "mongodb+srv://micael:tpMp3km2huYlM4Lr@cluster0.dxzaxti.mongodb.net/?retryWrites=true&w=majority"

// MONGO CLIENT 

const client = new MongoClient(remote);

async function run() {
    await client.connect();

    const db = client.db("fatec")
    const result = await db.createCollection('alunos')

    console.log(result)

    return "Done."
}

run()
    .then(console.log)
    .catch(console.error)