const express = require('express');
const calculo = require('./calculadora');
const app = express();

app.get('/', (req, res)=>{
    let resposta = 'Digite na URL os números desejados para as operações, como nos exemplos a seguir:</p>'
    resposta += '/somar/:a/:b (<a href="/somar/2/3">somar/2/3</a>)</p>';
    resposta += '/subtrair/:a/:b (<a href="/subtrair/2/3">subtrair/2/3</a>)</p>';
    resposta += '/multiplicar/:a/:b (<a href="/multiplicar/2/3">multiplicar/2/3</a>)</p>';
    resposta += '/dividir/:a/:b (<a href="/dividir/2/3">dividir/2/3</a>)';
    res.send(resposta);
});

app.get('/somar/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calculo.somar(a, b);
    res.send(`${a} + ${b} = ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calculo.subtrair(a, b);
    res.send(`${a} - ${b} = ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calculo.multiplicar(a, b);
    res.send(`${a} * ${b} = ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let b = Number(req.params.b);
    let a = Number(req.params.a);
    let resultado = calculo.dividir(a, b);
    res.send(`${a} / ${b} = ${resultado}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});