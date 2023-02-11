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
    if (nomeDoProfessor == '') {
      console.log('ERRO: Não é possível continuar com entrada vazia')
      entradaDados.close()
    } else {
      entradaDados.question(
        'Gênero do(a) professor(a): [FEMININO] OU [MASCULINO] ',
        function (generoDoProfessor) {
          let generoProfessor = generoDoProfessor.toUpperCase()
          if (generoProfessor == '') {
            console.log('ERRO: Não é possível continuar com entrada vazia')
            entradaDados.close()
          } else if (
            generoProfessor != 'MASCULINO' &&
            generoProfessor != 'FEMININO'
          ) {
            console.log(
              'ERRO: Gênero não cadastrado, favor escolher FEMININO ou MASCULINO'
            )
            entradaDados.close()
          } else {
            entradaDados.question('Digite o seu nome: ', function (nome) {
              let nomeAluno = nome
              if (nomeAluno == '') {
                console.log('ERRO: Não é possível continuar com entrada vazia')
                entradaDados.close()
              } else {
                entradaDados.question(
                  'Gênero do(a) aluno(a): [FEMININO] OU [MASCULINO] ',
                  function (generoDoAluno) {
                    let generoAluno = generoDoAluno.toUpperCase()
                    if (generoAluno == '') {
                      console.log(
                        'ERRO: Não é possível continuar com entrada vazia'
                      )
                      entradaDados.close()
                    } else if (
                      generoAluno != 'MASCULINO' &&
                      generoAluno != 'FEMININO'
                    ) {
                      console.log(
                        'ERRO: Gênero não cadastrado, favor escolher FEMININO ou MASCULINO'
                      )
                      entradaDados.close()
                    } else {
                      entradaDados.question(
                        'Qual o nome do curso: ',
                        function (nomeCurso) {
                          let curso = nomeCurso.toUpperCase()
                          if (curso == '') {
                            console.log(
                              'ERRO: Não é possível continuar com entrada vazia'
                            )
                            entradaDados.close()
                          } else {
                            entradaDados.question(
                              'Qual o nome da disciplina: ',
                              function (nomeDisciplina) {
                                let disciplina = nomeDisciplina.toUpperCase()
                                if (disciplina == '') {
                                  console.log(
                                    'ERRO: Não é possível continuar com entrada vazia'
                                  )
                                  entradaDados.close()
                                } else {
                                  console.log(
                                    '\n**************************MEDIA**************************'
                                  )
                                  entradaDados.question(
                                    'Digite a 1ª nota: ',
                                    function (primeiraNota) {
                                      let nota1 = primeiraNota
                                      if (nota1 == '') {
                                        console.log(
                                          'ERRO: Não é possível continuar com entrada vazia'
                                        )
                                        entradaDados.close()
                                      } else if (isNaN(nota1)) {
                                        console.log(
                                          'ERRO: Não é possível calcular com um valor não numérico'
                                        )
                                        entradaDados.close()
                                      } else if (nota1 < 0 || nota1 > 100) {
                                        console.log(
                                          'ERRO: O valor deve estar dentre 0 a 100'
                                        )
                                        entradaDados.close()
                                      } else {
                                        entradaDados.question(
                                          'Digite a 2ª nota: ',
                                          function (segundaNota) {
                                            let nota2 = segundaNota
                                            if (nota2 == '') {
                                              console.log(
                                                'ERRO: Não é possível continuar com entrada vazia'
                                              )
                                              entradaDados.close()
                                            } else if (isNaN(nota2)) {
                                              console.log(
                                                'ERRO: Não é possível calcular com um valor não numérico'
                                              )
                                              entradaDados.close()
                                            } else if (
                                              nota2 < 0 ||
                                              nota2 > 100
                                            ) {
                                              console.log(
                                                'ERRO: O valor deve estar dentre 0 a 100'
                                              )
                                              entradaDados.close()
                                            } else {
                                              entradaDados.question(
                                                'Digite a 3ª nota: ',
                                                function (terceiraNota) {
                                                  let nota3 = terceiraNota
                                                  if (nota3 == '') {
                                                    console.log(
                                                      'ERRO: Não é possível continuar com entrada vazia'
                                                    )
                                                    entradaDados.close()
                                                  } else if (isNaN(nota3)) {
                                                    console.log(
                                                      'ERRO: Não é possível calcular com um valor não numérico'
                                                    )
                                                    entradaDados.close()
                                                  } else if (
                                                    nota3 < 0 ||
                                                    nota3 > 100
                                                  ) {
                                                    console.log(
                                                      'ERRO: O valor deve estar dentre 0 a 100'
                                                    )
                                                    entradaDados.close()
                                                  } else {
                                                    entradaDados.question(
                                                      'Digite a 4ª nota: ',
                                                      function (quartaNota) {
                                                        let nota4 = quartaNota
                                                        if (nota4 == '') {
                                                          console.log(
                                                            'ERRO: Não é possível continuar com entrada vazia'
                                                          )
                                                          entradaDados.close()
                                                        } else if (
                                                          isNaN(nota4)
                                                        ) {
                                                          console.log(
                                                            'ERRO: Não é possível calcular com um valor não numérico'
                                                          )
                                                          entradaDados.close()
                                                        } else if (
                                                          nota4 < 0 ||
                                                          nota4 > 100
                                                        ) {
                                                          console.log(
                                                            'ERRO: O valor deve estar dentre 0 a 100'
                                                          )
                                                          entradaDados.close()
                                                        } else {
                                                          let resultado =
                                                            mediaModel.media(
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

                                                          if (
                                                            resultado >= 50 &&
                                                            resultado < 70
                                                          ) {
                                                            console.log(
                                                              '\n***************************EXAME**************************'
                                                            )

                                                            entradaDados.question(
                                                              'Digite a nota do EXAME: ',
                                                              function (
                                                                notaExame
                                                              ) {
                                                                let exame =
                                                                  notaExame
                                                                let resultadoFinal =
                                                                  mediaModel.exame(
                                                                    resultado,
                                                                    exame
                                                                  )
                                                                let exameFinal =
                                                                  mediaModel.validarNota(
                                                                    resultadoFinal,
                                                                    generoAluno
                                                                  )

                                                                console.log(
                                                                  '\n************************RELATÓRIO**************************'
                                                                )

                                                                if (
                                                                  generoAluno ==
                                                                  'FEMININO'
                                                                ) {
                                                                  console.log(
                                                                    `A aluna [${nomeAluno}] foi [${exameFinal}] na disciplina [${disciplina}]`
                                                                  )
                                                                } else {
                                                                  console.log(
                                                                    `O aluno [${nomeAluno}] foi [${exameFinal}] na disciplina [${disciplina}]`
                                                                  )
                                                                }
                                                                console.log(
                                                                  `Curso: ${curso}`
                                                                )
                                                                console.log(
                                                                  `Disciplina: ${disciplina}`
                                                                )
                                                                if (
                                                                  generoProfessor ==
                                                                  'FEMININO'
                                                                ) {
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
                                                                console.log(
                                                                  `Nota exame: ${exame}`
                                                                )
                                                                console.log(
                                                                  `Nota Final: ${resultadoFinal}`
                                                                )
                                                                console.log(
                                                                  `Status: ${nomeAluno} [${exameFinal}] no EXAME`
                                                                )

                                                                if (
                                                                  exameFinal !=
                                                                    'APROVADO' &&
                                                                  exameFinal !=
                                                                    'APROVADA'
                                                                ) {
                                                                  console.log(
                                                                    'Estude mais na próxima vez!'
                                                                  )
                                                                } else {
                                                                  console.log(
                                                                    'Parabéns!'
                                                                  )
                                                                }

                                                                entradaDados.close()
                                                              }
                                                            )
                                                          } else {
                                                            console.log(
                                                              '\n************************RELATÓRIO**************************'
                                                            )

                                                            if (
                                                              generoAluno ==
                                                              'FEMININO'
                                                            ) {
                                                              console.log(
                                                                `A aluna [${nomeAluno}] foi [${resultadoFinalSemExame}] na disciplina [${disciplina}]`
                                                              )
                                                            } else {
                                                              console.log(
                                                                `O aluno [${nomeAluno}] foi [${resultadoFinalSemExame}] na disciplina [${disciplina}]`
                                                              )
                                                            }
                                                            console.log(
                                                              `Curso: ${curso}`
                                                            )

                                                            console.log(
                                                              `Disciplina: ${disciplina}`
                                                            )
                                                            if (
                                                              generoProfessor ==
                                                              'FEMININO'
                                                            ) {
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
                                                              `Status: ${nomeAluno} foi [${resultadoFinalSemExame}]`
                                                            )
                                                            if (
                                                              resultadoFinalSemExame !=
                                                                'APROVADO' &&
                                                              resultadoFinalSemExame !=
                                                                'APROVADA'
                                                            ) {
                                                              console.log(
                                                                'Estude mais na próxima vez!'
                                                              )
                                                            } else {
                                                              console.log(
                                                                'Parabéns!'
                                                              )
                                                            }
                                                            entradaDados.close()
                                                          }
                                                        }
                                                      }
                                                    )
                                                  }
                                                }
                                              )
                                            }
                                          }
                                        )
                                      }
                                    }
                                  )
                                }
                              }
                            )
                          }
                        }
                      )
                    }
                  }
                )
              }
            })
          }
        }
      )
    } //aquiiiiii
  }
)
