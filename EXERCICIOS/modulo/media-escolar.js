function media(nota1, nota2, nota3, nota4) {
  let primeiranota = nota1
  let segundanota = nota2
  let terceiranota = nota3
  let quartanota = nota4

  let media =
    (Number(primeiranota) +
      Number(segundanota) +
      Number(terceiranota) +
      Number(quartanota)) /
    4

  return media
}

function exame(mediaAluno, notaExame) {
  let media = mediaAluno
  let nota = notaExame

  let resultadoExame = (Number(media) + Number(nota)) / 2

  return resultadoExame
}

// function validarNota(){
//     if(generoAluno == 'FEMININO'){
//         return 'APROVADA'
//     }   else{
//             return 'APROVADO'
//     }else{
//     if(generoAluno == 'FEMININO'){
//         return 'REPROVADA'
//     }else{
//         return 'REPROVADO'
// }

function validarNota(finalResultado, alunoGenero) {
  let resultadoFinal = finalResultado
  let generoAluno = alunoGenero

  if (resultadoFinal >= 60) {
    if (generoAluno == 'MASCULINO') {
      return 'APROVADO'
    } else {
      return 'APROVADA'
    }
  } else {
    if (generoAluno == 'MASCULINO') {
      return 'REPROVADO'
    } else {
      return 'REPROVADA'
    }
  }
}

function validarNotaSemExame(resultado, alunoGenero) {
  let resultadoFinal = resultado
  let generoAluno = alunoGenero

  if (resultado >= 70) {
    if (generoAluno == 'MASCULINO') {
      return 'APROVADO'
    } else {
      return 'APROVADA'
    }
  } else if (resultado < 50) {
    if (generoAluno == 'MASCULINO') {
      return 'REPROVADO'
    } else {
      return 'REPROVADA'
    }
  } else {
    return false
  }
}

module.exports = {
  media,
  exame,
  validarNota,
  validarNotaSemExame
}
