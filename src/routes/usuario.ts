import { Router } from "express"
import { UsuarioController } from "../controller/UsuarioController";
import { Usuario } from "../entity/Usuario";

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

// serviço para salvar um novo usuário

routerUsuario.post('/', async (req, res) => {
  const dados = req.body;
  if (dados.nome && dados.email) {
    const usuario = new Usuario(dados.nome, dados.email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
  } else {
    console.log('usuários invalidos')
  }
});

// serviço para listar todos os usuários

routerUsuario.get('/', async (req, res) => {
  const usuarios = await usuarioCtrl.recuperarTodos();
  res.json(usuarios);
});

