const notas = [7, 8, 2, 4, 6, 1, 0, 10, 8, 8]

const aprovados = notas.filter(nota => nota >= 7)

const media = aprovados.reduce((acc, val) => acc + val)/aprovados.length

console.log(media.toFixed(2))
