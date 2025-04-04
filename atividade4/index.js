const express = require('express'); //importa o exp
const app = express(); // faz o uso do exp
const estoque = require('./estoque');//carrega funções q estao no export

app.get('/', (req,res)=>{
    let html = '<h1>app_estoque</h1>';
    html += '<h3> rotas disponiveis: </h3>';
    html += '<p>/adicionar/:id/:nome/:qtd</p>';
    html += '<p>/listar</p>';
    html += '<p>/remover/:id</p>';
    html += '<p>/editar/:id/:qtd</p>';
    res.send(html);
}); //qual rota vai ser atendida, sempre precisa de req e resposta; quando recebe /, manda tal resp.

app.get('/adicionar/:id/:nome/:qtd', (req,res)=>{
    let item = {
        id: Number(req.params.id), // recupera o valor do id, para criar o obj
        nome: req.params.nome,
        qtd: Number(req.params.qtd)
    };//objeto

    res.send(estoque.adicionar(item));//chama a função
});

app.get('/listar', (req,res)=>{
    res.send(estoque.listar());
});

app.get('/remover/:id', (req,res)=>{
    let id= Number(req.params.id);

    res.send(estoque.remover(id));
});

app.get('/editar/:id/:qtd', (req,res)=>{
    let id= Number(req.params.id);
    let qtd = Number(req.params.qtd);

    res.send(estoque.editar(id,qtd));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta: ' + PORT);
}); // escuta req nessa porta
