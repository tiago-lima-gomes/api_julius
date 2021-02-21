import { UsuarioController } from '../controller/UsuarioController';
import { LancamentoController } from '../controller/LancamentoController';
import { Router } from 'express';
import { Lancamento } from '../entity/Lancamento';

export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço para salvar um novo lançamento
 */
routerLancamento.post('/', async (req, res) => {
    const { idUsuario, valor, descricao, data } = req.body;
    const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
    // console.log(idUsuario, "antes de entrar")
    if (usuario) {
        console.log(usuario,"entrou")
        const lancamento = new Lancamento(valor, descricao, data, usuario);
        const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento);
        res.json(lancamentoSalvo);
    } else {
        res.status(404).json({ mensagem: 'Usuário do lançamento não encontrado' });
    }
});

// as operações em bancos estão no controler