const http = require('http');
const url = require('url');
const axios = require('axios');

// BUSCA VIA URL NO SITE http://httpstat.us/
const search = async function (req, res) {
    var response = undefined
    const queryObject = url.parse(req.url, true).query;
    await axios.get(`http://httpstat.us/` + queryObject.status)
        .then(res => {
            response = res.data
        }).catch(err => {
            response = err.response.data
        })
    // RESPOSTAS DE ACORDO COM AS REQUISIÇÕES
    res.setHeader('Content-Type', 'application/json');
    // RESPOSTA NÃO ENCONTRADA
    if (response.code == undefined & queryObject.status != undefined) {
        await res.end(JSON.stringify("Status inexistente."))
        // STATUS INICIAL
    } else if (queryObject.status == undefined) {
        res.end(JSON.stringify("Use '/?status=' + número para testar os status"))
        // RESPOSTA ENCONTRADA
    } else {
        res.end(JSON.stringify(response.code + " --> " + response.description));
    }
};
// EXECUTA O SERVIDOR NA PORTA 3000
const server = http.createServer(search);
server.listen(3000);