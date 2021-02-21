import { Usuario } from "./Usuario";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Lancamento {

  constructor(valor: number, descricao: String, data: Date, usuario: Usuario) {
    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.usuario = usuario;
  }

  @PrimaryGeneratedColumn() // gerado automaticamente
  id: number;

  @Column({ type: "float" })
  valor: number;

  @Column()
  descricao: String;

  @Column()
  data: Date;

  @ManyToOne(() => Usuario) // mostra qual entidade especifica esse relacionamento
  usuario: Usuario

}
