let notas = [{ id: "1", titulo: "Nota 1", conteudo: "Conteúdo da anotação 1" }];

function listarNotas() {
  return notas;
}

function adicionarNota(nota) {
  notas.push(nota);
  return nota;
}

export { listarNotas, adicionarNota };
