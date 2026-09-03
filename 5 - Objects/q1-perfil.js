const perfil = {
    nome: "Marcos",
    idade: 20,
    cidade: "Quixadá",
    ativo: true,

    apresentar() {
        return this.nome + "\n" 
             + this.idade + "\n" 
             + this.cidade + "\n" 
             + this.curso + "\n"
    }
}

console.log(perfil.apresentar())

perfil.cidade = "Fortaleza"
perfil.curso = "Eng. Software"

console.log(perfil.apresentar())