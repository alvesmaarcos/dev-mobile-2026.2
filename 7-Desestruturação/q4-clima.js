const url =
"https://api.open-meteo.com/v1/forecast" +
"?latitude=-3.7172,-4.9708" +
"&longitude=-38.5433,-39.0156" +
"&current=temperature_2m," +
"apparent_temperature," +
"relative_humidity_2m," +
"precipitation,wind_speed_10m";

fetch(url)
.then(res => res.json())
.then(data => {
    const quixada = { nome: "Quixadá", ...data[0]}
    console.log(quixada)

    const fortaleza = {nome: "Fortaleza", ...data[1]}
    console.log(fortaleza)
})