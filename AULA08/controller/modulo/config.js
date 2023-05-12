/************************************************************************************************************************************
 * Objetivo: Arquivo responsável pelas variáveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Vinicius
 * Versão: 1.0
/***********************************************************************************************************************************/



/********************************************************** SUCESSO *************************************************************************/


const CREATED_ITEM = {
    status: 201,
    message: 'Registro cadastrado com sucesso.'
}

const UPDATED_ITEM = {
    status: 200,
    message: 'Registro atualizado com sucesso.'
}

const DELETED_ITEM = {
    status: 200,
    message: 'Registro deletado com sucesso.'
}

const FOUND_ITEM = {
    status: 200,
    message: 'Registro localizado com sucesso.'
}

/********************************************************** FALHA *************************************************************************/

const ERRO_REQUIRED_DATA = { status: 400, message: 'Um ou mais dados não foram preenchidos ou foram preenchidos incorretamente, por favor corrija e refaça a requisição.' }

const ERROR_NOT_FOUND = { status: 404, message: 'Nenhum registrado encontrado na requisição.' }

const ERRO_REQUIRED_ID = { status: 400, message: 'O atributo ID não foi preenchido ou não atende os requisitos, por favor corrija e refaça a requisição.' }

 const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor de banco de dados.' }

const ERROR_CONTENT_TYPE = { status: 415, message: "Erro tipo do conteúdo encaminhado não é compatível com o servidor, por gentileza encaminhar os dados através de um JSON" }


module.exports = {
    ERRO_REQUIRED_DATA,
    ERROR_NOT_FOUND,
    CREATED_ITEM,
    UPDATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERRO_REQUIRED_ID,
    DELETED_ITEM,
    ERROR_CONTENT_TYPE,
    FOUND_ITEM

}