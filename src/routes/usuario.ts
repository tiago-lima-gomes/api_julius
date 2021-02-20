import { Router } from "express"

export const routerUsuario = Router();

// porta padrão 
routerUsuario.get('/' , (req, res) => res.send("Chegou aq no serviços de usuário é tois"))

