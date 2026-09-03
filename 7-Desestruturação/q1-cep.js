const url = "https://brasilapi.com.br/api/cep/v1/01001000"

fetch(url)
.then(res => res.json())
.then( endereco => {
    let {cep, state, city, street} = endereco
    console.log(cep, state, city, street)
})
