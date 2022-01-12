import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("planos") // Deve ser exatamente igual ao nome da tabela
class Planos {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  tempo: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Planos };
