import express = require("express");
import axios from "axios"; // axios retorna o resultado obtido da busca do link

const { toXML } = require("jstoxml");
const { Parser } = require("json2csv");

// Cria uma nova instância de aplicativo express
const app: express.Application = express();

const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TELA INICIAL DA API, QUE DÁ INFORMAÇÕES SOBRE O USO
app.use("/home", function (_req, res) {
  res.type("html");
  res.send(`
      <div style="text-align: center; font-family: sans-serif">
        <h1>Avaliação 3 - Requisições da API Via Cep - Micael Miranda</h1>
        <h2>localhost:${porta}/estado/cidade/logradouro/tipo-de-resposta</h2>
        <p>tipos de resposta: json | xml | convert-xml | xml-download | csv</p>
        <a href="http://localhost:${porta}/SP/Atibaia/Rua%20Lirio/json">exemplo: localhost:${porta}/SP/Atibaia/Rua Lirio/json</a>
      </div>
    `);
});

// RETORNA O JSON
app.use("/:estado/:cidade/:logradouro/json", async function (req, res) {
  try {
    const search = await axios.get(
      `https://viacep.com.br/ws/${req.params.estado}/${req.params.cidade}/${req.params.logradouro}/json/`
    );
    res.json(search.data);
  } catch (err) {
    res.status(400).send("Ocorreu um erro ao realizar a busca");
  }
});

// RETORNA O XML
app.use("/:estado/:cidade/:logradouro/xml", async function (req, res) {
  try {
    const search = await axios.get(
      `https://viacep.com.br/ws/${req.params.estado}/${req.params.cidade}/${req.params.logradouro}/xml/`
    ); // a própria API já retorna o formato XML
    const xmlconverted = toXML(search.data);
    res.send(xmlconverted);
  } catch (err) {
    res.status(400).send("Ocorreu um erro ao realizar a busca");
  }
});

// CONVERTE JSON PARA XML
app.use("/:estado/:cidade/:logradouro/convert-xml", async function (req, res) {
  try {
    const search = await axios.get(
      `https://viacep.com.br/ws/${req.params.estado}/${req.params.cidade}/${req.params.logradouro}/json/`
    );
    const xmlconverted = toXML(search.data);
    res.send(xmlconverted);
  } catch (err) {
    res.status(400).send("Ocorreu um erro ao realizar a busca");
  }
});

// FAZ O DOWNLOAD DO XML
app.use("/:estado/:cidade/:logradouro/xml-download", async function (req, res) {
  try {
    const search = await axios.get(
      `https://viacep.com.br/ws/${req.params.estado}/${req.params.cidade}/${req.params.logradouro}/xml/`
    );
    res.header({
      "Content-Disposition": 'attachment; filename="cep.xml"',
      "Accept-Charset": "utf-8",
      "Content-Language": "pt-br",
      "Cache-Control": "no-cache",
    }); // baixa o arquivo .xml
    res.send(search.data);
  } catch (err) {
    res.status(400).send("Ocorreu um erro ao realizar a busca");
  }
});

// FAZ O DOWNLOAD DO CSV
app.use("/:estado/:cidade/:logradouro/csv", async function (req, res) {
  try {
    const search = await axios.get(
      `https://viacep.com.br/ws/${req.params.estado}/${req.params.cidade}/${req.params.logradouro}/json/`
    );

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(search.data);
    // faz a conversão do json para o csv

    res.header({
      "Content-Disposition": 'attachment; filename="cep.csv"',
      "Accept-Charset": "utf-8",
      "Content-Language": "pt-br",
      "Cache-Control": "no-cache",
    }); // baixa o arquivo .csv
    res.send(csv);
  } catch (err) {
    res.status(400).send("Ocorreu um erro ao realizar a busca");
  }
});

app.listen(porta, function () {
  console.log(`O App está sendo executado na porta ${porta}`);
});
