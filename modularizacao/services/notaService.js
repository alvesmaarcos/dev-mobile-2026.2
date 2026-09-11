import * as repository from "../repositories/notaRepository.js";

function listar() {
  return repository.listarNotas();
}

function criar(titulo, conteúdo) {
  const nota = { id: crypto.randomUUID(), titulo: titulo, conteudo: conteudo };
  return repository.adicionarNota(nota);
}

export { criar, listar };
