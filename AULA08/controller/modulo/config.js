/************************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas variáveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Vinicius
 * Versão: 1.0
/***********************************************************************************************************************************/


 const ERRO_REQUIRED_DATA = {
    status: 400,
    message: 'Um ou mais dados não foram preenchidos ou foram preenchidos incorretamente, por favor corrija e refaça a requisição.'
}

 const CREATED_ITEM = {
    status: 201,
    message: 'Registro cadastrado com sucesso.'
}

 const ERROR_INTERNAL_SERVER = {
    status: 500,
    message: 'Erro interno no servidor de banco de dados.'
}

module.exports = {
    ERRO_REQUIRED_DATA,
    CREATED_ITEM,
    ERROR_INTERNAL_SERVER

}