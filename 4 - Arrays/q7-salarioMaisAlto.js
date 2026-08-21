const funcionarios = [
    {
        "nome": "Anna", "salario": 2500
    },
    {
        "nome": "Davi", "salario": 1600
    },
    {
        "nome": "Marcos", "salario": 3000
    },
    {
        "nome": "Samuel", "salario": 2500
    }
]
const salarios = funcionarios.map(funcionario => funcionario.salario)
const maiorSalario = salarios.reduce((max, atual) => Math.max(max, atual))

console.log(maiorSalario)