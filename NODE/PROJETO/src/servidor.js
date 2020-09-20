const porta = 3003;

const express = require('express');

const app = express();

app.get('/produtos', (req, res, next) => {

    res.send({

        nome: "Notebook",

        preco: 123.45

    })

})

app.listen(porta, (erro) => {

    if(!erro) {

        console.log("Subiu!")

    } else {

        console.log("Deu merda!");

    }

});