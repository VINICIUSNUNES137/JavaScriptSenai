/************************************************************************************
 * Objetvo: Realizar a interação do aluno com o banco de dados
 * Autor: Vinicius
 * Data: 14/04/2023
 * Versão: 1.0
 ************************************************************************************/

/*
 * Para realizar a conexão com o banco de dados, iremos utilizar o Prisma
 *        npm install prisma --save
 *        npx prisma
 *        npx prisma init
 *        npm instal @prisma/client
 */

//import da biblioteca do prisma client (responsável por manipular dados no BD)
const { PrismaClient } = require("@prisma/client");

//Instancia da classe do PrismaClient
const prisma = new PrismaClient();

//Função para inserir um novo registro no Banco de Dados
const insertAluno = async function (dadosAluno) {
  let sql = `insert into tbl_aluno  (
                                        nome, 
                                        cpf, 
                                        rg, 
                                        data_nascimento, 
                                        email
                                    )
                                    values(
                                        "${dadosAluno.nome}",
                                        "${dadosAluno.cpf}",
                                        "${dadosAluno.rg}",
                                        "${dadosAluno.data_nascimento}",
                                        "${dadosAluno.email}"
                                    )`

                                    console.log(sql);

    //Executa o script SQL no BD onde recebemos o retorno se deu certo ou não                                    
    let result = await prisma.$executeRawUnsafe(sql)

    // console.log(result);
    
    if(result){
        return true
    }else{
        return false
    }
}

//Função para atualizar um registro do Banco de Dados
const updateAluno = function (dadosAluno) {};

//Função para deletar um registro do Banco de Dados
const deleteAluno = function (id) {};

//Função para retornar todos os registros do Banco de Dados
const selectAllAluno = async function () {
  //Variável que contem o script sql para executar no BD
  let sql = "select * from tbl_aluno";

  

  // console.log(sql);

  //Executa no BD o script e guarda na variável rsAluno
  //$queryRawUnsafe() é utilizado com o script está em uma variável
  //$queryRaw() é utilizado quando o script é diretamente implementado no metódo, ex:[ $queryRaw('select * from tbl_aluno) ]
  let rsAluno = await prisma.$queryRawUnsafe(sql);

  console.log(rsAluno);

  //Valida se o BD retornou algum registro
  if (rsAluno.length > 0) {
    return rsAluno;
  } else {
    return false;
  }
};

//Função para retornar um registro filtrado pelo id do Banco de Dados
const selectByIdAluno = function (id) {};

module.exports = {
  selectAllAluno,
  insertAluno
};
