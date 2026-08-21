const produtos = [50, 700, 15, 35, 60, 26, 33, 77.5]

const maioresQue50 = produtos.filter(produto => produto > 50)

console.log(maioresQue50)

const total = maioresQue50.reduce((acc, val) => acc + val)

console.log(total)