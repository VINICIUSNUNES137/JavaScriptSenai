function media(nota1, nota2, nota3, nota4) {
    let primeiranota = nota1
    let segundanota = nota2
    let terceiranota = nota3
    let quartanota = nota4

    let media = (Number(primeiranota) + Number(segundanota) + Number(terceiranota) + Number(quartanota)) / 4

    return media

}

function exame(mediaAluno, notaExame) {
    let media = mediaAluno
    let nota = notaExame

    let resultadoExame = (Number(media) + Number(nota)) / 2

    return resultadoExame
}

module.exports = {
    media,
    exame
}