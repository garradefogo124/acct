const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/school?retryWrites=true&w=majority', { useMongoClient: true })
const mongoAtlasUri = 'mongodb+srv://micael:123@cluster0.dxzaxti.mongodb.net/school?retryWrites=true&w=majority'
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}
mongoose.Promise = global.Promise;

module.exports = mongoose;


