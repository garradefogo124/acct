const mongoose = require("mongoose");

const mongoAtlasUri =
    "mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/myzoo?retryWrites=true&w=majority";
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Conexão realizada com sucesso!")
    );
} catch (e) {
    console.log("Não foi possível se conectar ao banco de dados");
}
mongoose.Promise = global.Promise;

module.exports = mongoose;