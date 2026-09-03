const url = "https://brasilapi.com.br/api/cep/v1/01001000"

fetch(url)
.then( res => res.json())
.then( data => {
    const novo = {
        numero: "1111",
        complemento: "casa"
    }
    const endereco = {
        ...data,
        ...novo
    }

    console.log(endereco)
})
