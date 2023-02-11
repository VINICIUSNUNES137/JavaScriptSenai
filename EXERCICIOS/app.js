var mediaModel = require('./modulo/media-escolar')

var readline = require('readline')
const { exame } = require('./modulo/media-escolar')

entradaDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('*********************SISTEMA DE MÉDIA*********************\n\n')

console.log('************************CADASTRO**************************\n')

entradaDados.question(
  'Digite o nome do(a) professor(a): ',
  function (nomeDoProfessor) {
    let nomeProfessor = nomeDoProfessor

    entradaDados.question(
      'Gênero do(a) professor(a): [FEMININO] OU [MASCULINO] ',
      function (generoDoProfessor) {
        let generoProfessor = generoDoProfessor.toUpperCase()

        entradaDados.question('Digite o seu nome: ', function (nome) {
          let nomeAluno = nome

          entradaDados.question(
            'Gênero do(a) aluno(a): [FEMININO] OU [MASCULINO] ',
            function (generoDoAluno) {
              let generoAluno = generoDoAluno.toUpperCase()

              entradaDados.question(
                'Qual o nome do curso: ',
                function (nomeCurso) {
                  let curso = nomeCurso

                  entradaDados.question(
                    'Qual o nome da disciplina: ',
                    function (nomeDisciplina) {
                      let disciplina = nomeDisciplina
                      console.log(
                        '\n**************************MEDIA**************************'
                      )
                      entradaDados.question(
                        'Digite a 1ª nota: ',
                        function (primeiraNota) {
                          let nota1 = primeiraNota
                          entradaDados.question(
                            'Digite a 2ª nota: ',
                            function (segundaNota) {
                              let nota2 = segundaNota

                              entradaDados.question(
                                'Digite a 3ª nota: ',
                                function (terceiraNota) {
                                  let nota3 = terceiraNota

                                  entradaDados.question(
                                    'Digite a 4ª nota: ',
                                    function (quartaNota) {
                                      let nota4 = quartaNota

                                      let resultado = mediaModel.media(
                                        nota1,
                                        nota2,
                                        nota3,
                                        nota4
                                      )
                                      let resultadoFinalSemExame =
                                        mediaModel.validarNotaSemExame(
                                          resultado,
                                          generoAluno
                                        )

                                      if (resultado >= 50 && resultado < 70) {
                                        console.log(
                                          '\n***************************EXAME**************************'
                                        )

                                        entradaDados.question(
                                          'Digite a nota do EXAME: ',
                                          function (notaExame) {
                                            let exame = notaExame
                                            let resultadoFinal =
                                              mediaModel.exame(resultado, exame)
                                            let exameFinal =
                                              mediaModel.validarNota(
                                                resultadoFinal,
                                                generoAluno
                                              )

                                            console.log(
                                              '\n*************************EXAME****************************'
                                            )
                                            console.log(
                                              '\n************************RELATÓRIO**************************'
                                            )

                                            if (generoAluno == 'FEMININO') {
                                              console.log(
                                                `A aluna [${nomeAluno}] foi [${exameFinal}] na disciplina [${disciplina}]`
                                              )
                                            } else {
                                              console.log(
                                                `O aluno [${nomeAluno}] foi [${exameFinal}] na disciplina [${disciplina}]`
                                              )
                                            }
                                            console.log(`Curso: ${curso}`)
                                            if (generoProfessor == 'FEMININO') {
                                              console.log(
                                                `Professora: ${nomeProfessor}`
                                              )
                                            } else {
                                              console.log(
                                                `Professor: ${nomeProfessor}`
                                              )
                                            }
                                            console.log(
                                              `Notas [${nota1}] [${nota2}] [${nota3}] [${nota4}]`
                                            )
                                            console.log(`Nota exame: ${exame}`)
                                            console.log(
                                              `Nota Final: ${resultadoFinal}`
                                            )
                                            console.log(
                                              `Status: ${nomeAluno} [${exameFinal}] no EXAME`
                                            )
                                          }
                                        )
                                      } else {
                                        console.log(
                                          '\n************************RELATÓRIO**************************'
                                        )

                                        if (generoAluno == 'FEMININO') {
                                          console.log(
                                            `A aluna [${nomeAluno}] foi [${resultadoFinalSemExame}] na disciplina [${disciplina}]`
                                          )
                                        } else {
                                          console.log(
                                            `O aluno [${nomeAluno}] foi [${resultadoFinalSemExame}] na disciplina [${disciplina}]`
                                          )
                                        }
                                        console.log(`Curso: ${curso}`)
                                        if (generoProfessor == 'FEMININO') {
                                          console.log(
                                            `Professora: ${nomeProfessor}`
                                          )
                                        } else {
                                          console.log(
                                            `Professor: ${nomeProfessor}`
                                          )
                                        }
                                        console.log(
                                          `Notas: [${nota1}] [${nota2}] [${nota3}] [${nota4}]`
                                        )
                                        console.log(
                                          `Média final: [${resultado}]`
                                        )
                                        console.log(
                                          `${nomeAluno} foi [${resultadoFinalSemExame}]`
                                        )
                                      }
                                    }
                                  )
                                }
                              )
                            }
                          )
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        })
      }
    )
  }
)
