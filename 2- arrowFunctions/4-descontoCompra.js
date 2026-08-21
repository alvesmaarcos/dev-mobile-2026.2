const calcularTotal = (valorCompra, clienteVip) => {
    return (clienteVip) ? valorCompra * 0.85 : valorCompra * 0.05
}

const compra = calcularTotal(200, true)

console.log(compra)