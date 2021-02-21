import { app }  from './app';

const PORTA = 3000;

const server = app.listen(PORTA, () => console.log(`Escutando na porta ${PORTA}`))

process.on("SIGINT", ()=>{ // SIGINT = ctrl + c - ao matar o processo
    // Ao encerrar o ´rocesso o app(servidor) é encerrado também
    server.close();
    console.log('App finalizado')
  });
