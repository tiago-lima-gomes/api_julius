import { createConnection } from "typeorm"

export const conectarServidorNoBD = async () => {
  const conexao = await createConnection();
  console.log(`App conectado ao BD ${conexao.options.database}`)

  process.on("SIGINT", ()=>{ // SIGINT = ctrl + c
    conexao.close().then(()=> console.log("Conexão encerrada com o BD"));
  });
}