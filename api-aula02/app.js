const express = require('express')
const app = express()

let tarefas = [{ id: 1, titulo: "Estudar HTTP" }]

app.use("/", (req, res) => {
    res.send("Deu certo")
})


app.get("/tarefas", (req, res) => {
    res.send(tarefas)
})

app.post('/tarefas', (req, res) => {
    const nova = { id: Date.now(), titulo: req.body.titulo}
    tarefas.push(nova)
    res.status(201).json(nova)
})

app.delete("/tarefas/:id", (req, res) => {
    const id = Number(req.params.id)
    tarefas = tarefas.filter(tarefa => tarefa.id != id)
    res.send(`tarefa ${id} apagada`)
})

app.listen(3000, () => {
    console.log("API escutando em http://localhost:3000")
})