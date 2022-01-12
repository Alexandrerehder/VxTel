import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("ddds") // Deve ser exatamente igual ao nome da tabela
class DDDs {
  @PrimaryColumn()
  id?: string;

  @Column()
  origem: string;

  @Column()
  destino: string;

  @Column()
  tarifa: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { DDDs };
