const url = "https://brasilapi.com.br/api/cep/v1/01001000"

fetch(url)
.then(res => res.json())
.then( endereco => {
    let {cep, ...local} = endereco
    console.log(cep)
    console.log(local)

})
