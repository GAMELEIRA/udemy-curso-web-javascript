const { Console } = require('console');
const fs = require('fs');

const caminho = __dirname + '/arquivo.json'

//LEITURA DE ARQUIVOS DE FORMA SINCRONA
const conteudo = fs.readFileSync(caminho, 'UTF-8');

console.log(conteudo);

//LEITURA DE ARQUIVOS DE FORMA ASSINCRONA
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {

    const config = JSON.parse(conteudo);

    console.log(`${config.db.host}: ${config.db.port}`);

});

const config = require("./arquivo.json");

console.log(config.db);

//LEITURA DE PASTA
fs.readdir(__dirname, (err, arquivos)=> {

    console.log("Conteúdo da pasta...");

    console.log(arquivos);

})