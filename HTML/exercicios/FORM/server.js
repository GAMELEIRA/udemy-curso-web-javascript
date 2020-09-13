const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({

    extended: true

}));

app.post("/api/usuarios", (requisicao, resposta) => {

    console.log(requisicao.body);

    resposta.send("<h1>Parabéns usuário incluido!</h1>");

});

app.post("/api/usuarios/:id", (requisicao, resposta) => {

    console.log(requisicao.params.id);

    console.log(requisicao.body);

    resposta.send("<h1>Parabéns usuário alterado!</h1>");

});



app.listen(3333, (error) => {

    if(error) {

        throw Error("Servidor morreu!");

    } else {

        console.log("To de boa!");

    }

});