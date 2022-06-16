import express, { NextFunction, Request, response, Response } from 'express';
const axios = require('axios')
const {toXML} = require("jstoxml")
const jsoncsv = require("json-2-csv")

const app = express();

let csv: string

//Consulta os dados no ViaCep e retorna ao usuario
app.use('/busca_cep', async (request: express.Request, response: express.Response, next: NextFunction) => {
    try{
        const busca = await axios.get(`https://viacep.com.br/ws/${request.query.estado}/${request.query.cidade}/${request.query.logradouro}/json/`)
        response.send(busca.data);
    }catch{
        response.send('Erro ao buscar endereço')
    }

    next()
})

app.use('/xml', async (request: express.Request, response: express.Response, next: NextFunction) => {
    try{
        const busca = await axios.get(`https://viacep.com.br/ws/${request.query.estado}/${request.query.cidade}/${request.query.logradouro}/xml/`)
        response.send(busca.data);

    }catch{
        response.send('Erro ao buscar endereço')
    }

    next()
})


app.use('/csv', async (request: express.Request, response: express.Response, next: NextFunction) => {
    try{
          
        response.header({
            'Content-Disposition': 'attachment; filename="csv.csv"',
            'Accept-Charset': 'utf-8',
            'Content-Language': 'pt-br'
          })
          response.type('application/json')
          response.send(csv)
      
      

    }catch{
        response.send('Erro ao buscar endereço')
    }

    next()
})




app.listen(5000);