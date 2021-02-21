import { getManager } from 'typeorm';
import { Lancamento } from "../entity/Lancamento";

export class LancamentoController {

    async salvar(lancamento: Lancamento) {
    //  try{ 
        const lancamentoSalvo = await getManager().save(lancamento);
        // console.log(lancamentoSalvo, "kkkkkkk")
        return lancamentoSalvo;
    //  } catch{
    //   console.log("deu merda")
    //  }
    }
}
