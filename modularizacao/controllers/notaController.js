import * as notas from "../services/notaService.js";

function listar(req, res) {
  return notas.listar;
}

function criar(req, res) {
  notas.criar(req.body);
}

export { listar, criar };
