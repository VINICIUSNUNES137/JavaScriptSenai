/************************************************************************************
 * Objetvo: Implementar a regra de negócio entre o app e a model
 * Autor: Vinicius
 * Data: 24/04/2023
 * Versão: 1.0
 ************************************************************************************/

 //função para receber os dados do APP e enviar para a model para inserir um novo item
 const inserirAluno = function(dadosAluno){

 }

 //função para receber os dados do APP e enviar para a model para atualizar um item existente
 const atualizarAluno = function(dadosAluno){

}

//função para receber os dados do APP e enviar para a model para excluir um item existente
const deletarAluno = function(id){

}

//função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAluno = async function(){

    //Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno()

    // console.log(dadosAluno);
    

    //Cria um objeto do tipo JSON
    let dadosJSON = {}

    //Valida se o BD teve registros
    if(dadosAluno) {
        //Adiciona o ARRAY de alunos em um JSON para retornar ao APP
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    }else{
        return false
    }
}

//função para buscar um item filtrando pelo ID, que será encaminhado pela model
const buscarIdAluno = function(id){

}

module.exports = {
    selecionarTodosAluno
}