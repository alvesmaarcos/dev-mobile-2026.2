export default function calcularMedia(notas) {
    const soma = notas.reduce(
        (total, valor) => total + valor, 0)
    return soma / notas.length
}