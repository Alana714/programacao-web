const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress()); //configurando um motor para renderizar arquivos html
app.set('view engine', 'html'); // dizendo q o motor renderizador é o html
app.set('views', __dirname + '/views'); //onde que estao as telas
app.use(express.urlencoded({extended:true})); //decodifica a requisição 

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.post('/agendar_consulta', (req, res)=>{
    let dados_consulta = req.body;
    let erro_form = false;
    let erro_data = false;
    let campos_invalidos = [];

    const dataAtual = new Date();

    for (let campo in dados_consulta) {
        let valor = dados_consulta[campo];

        if (campo === "data_da_consulta") {
            const dataSelecionada = new Date(valor);

            let hoje = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate());
            let dataEscolhida = new Date(dataSelecionada.getFullYear(), dataSelecionada.getMonth(), dataSelecionada.getDate());

            if (dataEscolhida <= hoje) {
                erro_data = true;
            }
        }

        if (campo != "Observação" && valor.length == 0){
            erro_form = true;
            campos_invalidos.push(campo);
        }
        
      }
    res.render('index.html', {erro_form, campos_invalidos, erro_data, dados_consulta});
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta '+ PORT);
});


