import  express from 'express';
import  bodyParser from 'body-parser';
import  cors from 'cors';
import  logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routerUsuario } from './routes/usuario';
import { routerLancamento} from "./routes/lancamento"
// import { routerLancamento } from './routes/lancamento';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs
 */
app.use(logger('dev'));


/**
 * Conecta no BD
 */
conectarServidorNoBD();

/**
 * Configuração de rotas
 */

app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('/', (req, res) => res.send('API do app Julius'));

