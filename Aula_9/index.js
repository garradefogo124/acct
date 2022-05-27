import { MongoClient } from "mongodb";

// CONEXÃO URL
const local = "mongodb://localhost:27017"
const remote = "mongodb+srv://micael:tpMp3km2huYlM4Lr@cluster0.dxzaxti.mongodb.net/?retryWrites=true&w=majority"

// MONGO CLIENT 

const client = new MongoClient(remote);

(async function run() {
    try {
        //MongoDB Connectoin
        await client.connect();

        // Establish connection
        await client.db("admin").command({ ping: 1 })
        console.log("Conectado com sucesso!")


    } catch (err) {
        console.log("Error Mongo: " + err)

    } finally {
        // Close connection
        client.close()
    }
})()