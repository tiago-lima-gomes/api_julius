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


// Serviço para recuperar os lançamentos de um determinado usuário

routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
  const idUsuario = parseInt(req.params.idUsuario);
  try{ 
  // await usuarioCtrl.verificaId(idUsuario);
  const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario);
  res.json(lancamentos);
  } catch{
    console.log("id invalido");
    res.status(404).json({ mensagem: 'id invalido' });
  }
});

