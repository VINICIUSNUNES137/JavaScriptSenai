/************************************************************************************
 * Objetvo: Implementar a regra de negócio entre o app e a model
 * Autor: Vinicius
 * Data: 24/04/2023
 * Versão: 1.0
 ************************************************************************************/

//Import do arquivo de acesso ao BD
let alunoDAO = require("../model/DAO/alunoDAO.js");

//require da arquivo de configurações do projeto (Código de Erros)
const message = require("./modulo/config.js");

//função para receber os dados do APP e enviar para a model para inserir um novo item
const inserirAluno = async function (dadosAluno) {
  if (
    dadosAluno.nome == "" ||
    dadosAluno.nome == undefined ||
    dadosAluno.nome.length > 100 ||
    dadosAluno.cpf == "" ||
    dadosAluno.cpf == undefined ||
    dadosAluno.cpf.length > 18 ||
    dadosAluno.rg == "" ||
    dadosAluno.rg == undefined ||
    dadosAluno.rg.length > 15 ||
    dadosAluno.data_nascimento == "" ||
    dadosAluno.data_nascimento == undefined ||
    dadosAluno.data_nascimento.length > 10 ||
    dadosAluno.email == "" ||
    dadosAluno.email == undefined ||
    dadosAluno.email.length > 250
  ) {
    message.ERRO_REQUIRED_DATA;
  } else {
    //ENVIA OS DADOS PARA A MODEL A SEREM INSERIDOS NO BD
    let status = await alunoDAO.insertAluno(dadosAluno);

    console.log(status);
    

    if (status) {
      return message.CREATED_ITEM;
    } else {
      return message.ERROR_INTERNAL_SERVER;
    }
  }
};

//função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = function (dadosAluno) {};

//função para receber os dados do APP e enviar para a model para excluir um item existente
const deletarAluno = function (id) {};

//função para retornar todos os itens da tabela recebidos da model
const selecionarTodosAluno = async function () {
  //Solicita ao DAO todos os alunos do BD
  let dadosAluno = await alunoDAO.selectAllAluno();

  // console.log(dadosAluno);

  //Cria um objeto do tipo JSON
  let dadosJSON = {};

  //Valida se o BD teve registros
  if (dadosAluno) {
    //Adiciona o ARRAY de alunos em um JSON para retornar ao APP
    dadosJSON.alunos = dadosAluno;
    return dadosJSON;
  } else {
    return false;
  }
};

//função para buscar um item filtrando pelo ID, que será encaminhado pela model
const buscarIdAluno = function (id) {};

module.exports = {
  selecionarTodosAluno,
  inserirAluno,
};
