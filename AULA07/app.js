/*****************************DOC**************************************
 * Objetivo: Criar uma API para manipulação de estados e cidades
 * Data: 10/03/2023
 * Autor: Vinicius Nunes
 * Versão: 1.0
 * *******************************************************************/
/*****************************INFOS************************************
 * Express: Uma dependência do Node, que permite a
 * integração entre o protocolo http com o código
 *
 * código do express (CMD): npm install express --save
 *
 * cors: Gerenciador de permissões do protocolo HTTP
 * código cors: npm install cors --save
 *
 * body-parser: É uma dependência que permite manipular dados enviados pelo body da requisição
 * código body-parser: npm install body-parser --save
 *
 * *******************************************************************/
/**
 * Express: responsável pela requisição
 * Cors: responsável pelas permissões das requisições
 * body-parser: responsável pela manipulação do body da requisição
 *
 * *****************************************************************/

//Imports das dependencias para criar a API
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const { response } = require('express')

//Cria um objeto com as informações da classe express
const app = express();

app.use((request, response, next) => {
  /*Permite gerenciar a origem das requisições da API,
   * o (*) significa que será pública
   * caso não for, deve ser escrito o IP
   */
  response.header("Access-Control-Allow-Origin", "*");

  /*Permite gerenciar quais métodos tem liberação para a requisição*/
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  /*Ativa no cors das requisições as permissões estabelecidas*/
  app.use(cors());

  next();
});

/*endPoints */

//criar a string abaixo com (/) e sem espaços, minusculo e sem caractere especial
//endPoint para listar os Estados
app.get("/estados", cors(), async function (request, response, next) {
  
    const estadosCidades = require('./modulo/estados_cidades.js')
    let listaDeEstados = estadosCidades.getListaDeEstados()
  
    response.json(listaDeEstados);
  response.status(200);
});

//Permite carregar os endpoints criados e aguardar as requisições pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
  console.log("Servidor aguardando requisições");
});

//acessando: http://localhost:8080/estados