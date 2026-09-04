import { celsiusParaFahrenheit, kmParaMilhas } from './conversor.js'

const celsius = 20
const fahrenheit = celsiusParaFahrenheit(celsius)
console.log(fahrenheit)

const km = 171
const milhas = kmParaMilhas(km)
console.log(milhas)