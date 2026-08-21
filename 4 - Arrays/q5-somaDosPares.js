const numeros = [2, 3, 4, 5, 6, 7, 9 , 33, 4502, 10002]

const pares = numeros.filter(num => num % 2 === 0)

const somaDosPares = pares.reduce((acc, val) => acc + val)

console.log(somaDosPares)