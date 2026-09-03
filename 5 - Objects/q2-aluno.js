const aluno = {
    nome: "Ana",
    idade: 20,
    curso: "Ciência da Computação"
}


function apresentar({nome, curso}){
    return `Nome: ${nome}. Curso: ${curso}`
}
console.log(apresentar(aluno))