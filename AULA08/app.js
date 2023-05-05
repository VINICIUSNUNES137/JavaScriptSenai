//Import das bibliotecas(dependências) do projeto

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const message = require("./controller/modulo/config.js");



//Cria um objeto com as informações da classe express
const app = express()

//Defie as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origen das requisiçõe da API
    //* - significa que a API será pública
    //IP - se colocar o IP, a API smente responderá para aquela máquina
    response.header('Access-Control-Allow-Origin', '*')

    //Permite gerenciar quais verbos (métodos) poderão fazer requisições
    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS')

    //Ativa no cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update, Delete)

/****************************************************
 * Objetvo: Tabela do Aluno
 * Data: 14/04/2023
 * Versão: 1.0
 ***************************************************/

/*
* criando uma const para realizar o processo de
* padronização de dados que vão chegar no body 
* da requisição
*/
const bodyJson = bodyParser.json()

//Require da pasta Controller
const controllerAluno = require('./controller/controller_aluno.js')


//EndPoint: Retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

    //Import da controller do Aluno

    //solicita a controller que retornE todos os alunos do BD
    let dados = await controllerAluno.selecionarTodosAluno()

    //Valida se existem registros para retornar na requisição
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json()
    }

})

//EndPoint: Retorna dados do aluno pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

})

//EndPoint: Insere um novo aluno
//adicionado o objeto body json
app.post('/v1/lion-school/aluno', cors(), bodyJson, async function(request, response) {
    
    let contentType = request.headers['content-type']

    if(contentType == 'application/json'){
    
    console.log(contentType);
    

    //Recebe os dados encaminhados no body da requisição
    let dadosBody = request.body

    // console.log(dadosBody);
    

    //Envia  os dados para a controller
    let resultInsertData = await controllerAluno.inserirAluno(dadosBody)

    //Retorna o status code e a messagem
    // console.log(resultInsertData);
    
    response.status(resultInsertData.status)
    response.json(resultInsertData)
    }else{
        response.status(message.ERROR_CONTENT_TYPE.status)
        response.json(message.ERROR_CONTENT_TYPE)
    }

})

//EndPoint: Atualiza um aluno pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyJson, async function(request, response) {
    let dadosBody = request.body
    let idAluno = request.params.id

    let resultUpdateData = await controllerAluno.atualizarAluno(dadosBody, idAluno)

    response.status(resultUpdateData.status)
    response.json(resultUpdateData)


})

//EndPoint: Deleta um aluno pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {
    
    

    let idAluno = request.params.id

    let resultUpdateData = await controllerAluno.deletarAluno(idAluno)

    response.status(resultUpdateData.status)
    response.json(resultUpdateData)


})

app.listen(8080, function(){
    console.log('rodando');
    
})