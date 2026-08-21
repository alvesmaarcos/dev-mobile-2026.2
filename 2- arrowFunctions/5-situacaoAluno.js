const situacaoAluno = (nota1, nota2) => {
    let media = (nota1 + nota2)/2

    return  media >= 7 ? "Aprovado" : 
            media >= 4 ? "Recuperação" : "Reprovado" 
}

console.log(situacaoAluno(10, 5))
console.log(situacaoAluno(6, 5))
console.log(situacaoAluno(1, 6))