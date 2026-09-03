const livro = {
    titulo: "JS Essencial",
    preco: 50,
    estoque: 8
}

const copia = {...livro}

copia.preco = 42
copia.estoque = 12

console.log(livro, copia)