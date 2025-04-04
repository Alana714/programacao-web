let itens = [];

function adicionar(item){
    let item_valido = validar_item;


    if(item_valido){// n aceitar itens invalidos
        itens.push(item);//pilha, inserir o item
    }

    return item_valido;
}//pega o item q recebi e insere no array

function listar(){
    return itens;
}

function remover(){

}

function editar(id,qtd){
    if(!is_numerico(id) || !is_id_cadastrado(id) || !is_numerico(qtd) || qtd < 0){
        return false;
    }
    itens.forEach(itens_cadastrado =>{
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        }
    });
    return true;
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
}

function is_numerico(n){
    if(
        isNaN(n) || //not a number
        n == null 
    ){
        return false;
    }

}

function is_id_cadastrado(id){
    let item_existente = false;
    itens.forEach(item_cadastrado =>{//percorre todos os elementos da lista
        if(item.id == item_cadastrado.id){
            item_existente = true;
        }
    });
    return item_existente;
}

function validar_item(item){//refatoramento
    let item_valido = true;

    if(
        !is_numerico(item.id) ||
        item.id <=0
    ){
        item_valido = false;
    }

    if(is_id_cadastrado(item.id)){
        item_valido = false
    }

    if(item.nome.lenght == 0){
        item_valido = false;
    }

    if(
        !is_numerico(item.qtd) || // se a função n for verdade
        item.qtd <0
    ){
        item_valido = false;
    }

    return item_valido
}