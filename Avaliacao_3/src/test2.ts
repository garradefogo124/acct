import express from "express";
import axios from "axios";
import { toXML } from "jstoxml";
import jsonexport from "jsonexport/dist";

const app: express.Application = express();
const port: number = 3003;

let json: any;
let xml: string;
let csv: string;

app.use(
  "/:estado/:cidade/:logradouro/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<any> => {
    await axios
      .get(
        `https://viacep.com.br/ws/${req.params.estado}/${req.params.cidade}/${req.params.logradouro}/json/`
      )
      .then(function (resultado) {
        if (resultado.data.length !== 0) {
          json = resultado.data;
        } else {
          json = "Erro ao encontrar o endereço!";
        }
      })
      .catch((error) => {
        console.log(error);
        res.send("Erro na requisição! Favor tentar novamente!");
      });
    next();
  }
);

app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (json) {
      xml = toXML(json);
    }
    next();
  }
);

app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (json) {
      if (json !== "Erro ao encontrar o endereço!") {
        jsonexport(json, (err: any, csv2: any) => (csv = csv2));
      } else {
        csv = "Erro ao encontrar o endereço!";
      }
    }
    next();
  }
);

app.use(
  "/:estado/:cidade/:logradouro/json",
  (req: express.Request, res: express.Response): void => {
    res.type("application/json");
    res.send(json);
  }
);

app.use(
  "/:estado/:cidade/:logradouro/xml",
  (req: express.Request, res: express.Response): void => {
    res.header({
      "Content-Disposition": 'attachment; filename="xml.xml"',
      "Accept-Charset": "utf-8",
      "Content-Language": "pt-br",
    });
    res.type("application/json");
    res.send(xml);
  }
);

app.use(
  "/:estado/:cidade/:logradouro/csv",
  (req: express.Request, res: express.Response): void => {
    res.header({
      "Content-Disposition": 'attachment; filename="csv.csv"',
      "Accept-Charset": "utf-8",
      "Content-Language": "pt-br",
    });
    res.type("application/json");
    res.send(csv);
  }
);

app.use((req: express.Request, res: express.Response): void => {
  res.type("html");
  res.send(`
      <h1>Por favor acesse o site da seguinte forma:</h1>
      <h2>localhost:${port}/estado/cidade/logradouro/tipo</h2>
      <p>Altere o estado, a cidade e o logradouro para pesquisar. Em "Tipo" use json, xml ou csv.</p>
      <p>Os tipos xml e csv são baixados em seus respectivos formatos, o tipo json é exibido na página.</p>
    `);
});

app.listen(port, () => console.log(`O servidor está aberto na porta ${port}`));
