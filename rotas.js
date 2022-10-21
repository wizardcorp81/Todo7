const express = require('express')

const app = express()

// Configurações da middleware
const middlewareJSON = express.json()
app.use( middlewareJSON )

app.get( '/soma', function ( req, res )
{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 + num2;
    res.send({total})
})

app.get( '/subtracao', function ( req, res )
{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 - num2;
    res.send({total})
})

app.get( '/divisao', function ( req, res )
{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 / num2;
    res.send({total})
})

app.get( '/multiplicar', function ( req, res )
{
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let total = num1 * num2;
    res.send({total})
})


const porta = 3333
module.exports = app

app.listen( porta, function() {
    console.log( `
    A aplicação está rodando na porta ${porta}!
    ` )
})