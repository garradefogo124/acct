import { MongoClient } from 'mongodb'

// CONEXÃO URL
const local = "mongodb://localhost:27017"
const remote = "mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/?retryWrites=true&w=majority"

// MONGO CLIENT 

const client = new MongoClient(remote);
const dbName = "fatec"

async function run() {
    await client.connect();

    const db = client.db("fatec")
    //const result = await db.createCollection('alunos')

    const collection = db.collection("alunos")

    //const result = await collection.insertOne({ name: "Micael", age: 18 })

    // const result = await collection.insertMany(
    //     { name: "Micael", age: 18 },
    //     { name: "Mayara", age: 19 }
    // )

    // const result = await collection.find({}).toArray()

    // const result = await collection.findOne({ name: "Micael" })

    // const result = await collection.updateOne({ name: "Micael" }, { $set: { age: 6 } })

    //const result = await collection.deleteOne({ name: "Lucas" })
    console.log(result)

    return "Done."
}

run()
    .then(console.log)
    .catch(console.error)