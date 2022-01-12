import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("history") // Deve ser exatamente igual ao nome da tabela
class History {
  @PrimaryColumn()
  id?: string;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  plano: string;

  @Column()
  minutos: number;

  @Column()
  semPlano: number;

  @Column()
  comPlano: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { History };
