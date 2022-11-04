import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://a9dafe7c8dd04614ab60920ee160ebe7@o4504103212154880.ingest.sentry.io/4504103259340800",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

//teste
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