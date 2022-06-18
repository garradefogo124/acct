const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./controllers/index.js")(app);

app.listen(port, () => {
    console.log(`⚡️ O servidor está rodando em http://localhost:${port}`);
});
