const usuario = {
    nome: "Carlos",
    endereco: {
        cidade: "Quixadá"
    },
}

const {nome, endereco: {cidade, estado="CE"}} = usuario

console.log(usuario.nome, usuario.endereco)