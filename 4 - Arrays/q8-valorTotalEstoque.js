const produtos = [
    {
        nome: "arroz", valor: 5, quantidade: 15
    },
    {
        nome: "feijao", valor: 4, quantidade: 10
    },
    {
        nome: "biscoito", valor: 7.90, quantidade: 20
    },
    {
        nome: "bolacha", valor: 2, quantidade: 20
    },
    {
        nome: "cuscuz", valor: 1.5, quantidade: 30
    }
]


const estoque = produtos.map(p => p.valor, p.quantidade)

const soma = 0

const total = estoque.forEach(p => {
    soma += p.quantidade * p.valor
});

console.log(soma)