"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var axios_1 = require("axios"); // axios retorna o resultado obtido da busca do link
var Parser = require("json2csv").Parser;
// Cria uma nova instância de aplicativo express
var app = express();
var porta = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/home", function (_req, res) {
    res.type("html");
    res.send("\n      <div style=\"text-align: center; font-family: sans-serif\">\n        <h1>Avalia\u00E7\u00E3o 3 - Requisi\u00E7\u00F5es da API Via Cep - Micael Miranda</h1>\n        <h2>localhost:".concat(porta, "/estado/cidade/logradouro/tipo-de-resposta</h2>\n        <p>tipos de resposta: json | xml | xml-download | csv</p>\n        <a href=\"http://localhost:").concat(porta, "/SP/Atibaia/Rua%20Lirio/json\">exemplo: localhost:").concat(porta, "/SP/Atibaia/Rua Lirio/json</a>\n      </div>\n    "));
});
// RETORNA O JSON
app.use("/:estado/:cidade/:logradouro/json", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var search, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://viacep.com.br/ws/".concat(req.params.estado, "/").concat(req.params.cidade, "/").concat(req.params.logradouro, "/json/"))];
                case 1:
                    search = _a.sent();
                    res.json(search.data);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    res.status(400).send("Ocorreu um erro ao realizar a busca");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
// RETORNA O XML
app.use("/:estado/:cidade/:logradouro/xml", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var search, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://viacep.com.br/ws/".concat(req.params.estado, "/").concat(req.params.cidade, "/").concat(req.params.logradouro, "/xml/"))];
                case 1:
                    search = _a.sent();
                    res.json(search.data);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    res.status(400).send("Ocorreu um erro ao realizar a busca");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
// FAZ O DOWNLOAD DO XML
// é quase igual ao de cima, mas esse faz o download ao invés de exibir na tela
app.use("/:estado/:cidade/:logradouro/xml-download", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var search, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://viacep.com.br/ws/".concat(req.params.estado, "/").concat(req.params.cidade, "/").concat(req.params.logradouro, "/xml/"))];
                case 1:
                    search = _a.sent();
                    res.header({
                        "Content-Disposition": 'attachment; filename="cep.xml"',
                        "Accept-Charset": "utf-8",
                        "Content-Language": "pt-br",
                        "Cache-Control": "no-cache"
                    }); // baixa o arquivo .xml
                    res.send(search.data);
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    res.status(400).send("Ocorreu um erro ao realizar a busca");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
// FAZ O DOWNLOAD DO CSV
app.use("/:estado/:cidade/:logradouro/csv", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var search, json2csvParser, csv, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("https://viacep.com.br/ws/".concat(req.params.estado, "/").concat(req.params.cidade, "/").concat(req.params.logradouro, "/json/"))];
                case 1:
                    search = _a.sent();
                    json2csvParser = new Parser();
                    csv = json2csvParser.parse(search.data);
                    // faz a conversão do json para o csv
                    res.header({
                        "Content-Disposition": 'attachment; filename="cep.csv"',
                        "Accept-Charset": "utf-8",
                        "Content-Language": "pt-br",
                        "Cache-Control": "no-cache"
                    }); // baixa o arquivo .csv
                    res.send(csv);
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    res.status(400).send("Ocorreu um erro ao realizar a busca");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
});
app.listen(porta, function () {
    console.log("O App est\u00E1 sendo executado na porta ".concat(porta));
});
