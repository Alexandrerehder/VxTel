import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export class CreateDDDs1639179737102 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ddds", // Nome da tabela
        columns: [
          {
            name: "id", // Nome da coluna
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "origem",
            type: "varchar",
          },
          {
            name: "destino",
            type: "varchar",
          },
          {
            name: "tarifa",
            type: "numeric",
          },
        ],
      })
    );

    const ids = [];
    for (let i = 0; i < 7; i += 1) {
      ids.push(uuidv4());
    }

    await queryRunner.query(`INSERT INTO DDDS(id, origem, destino, tarifa)
    values('${ids[0]}', '011', '016', 1.90),
    ('${ids[1]}','016', '011', 2.90),
    ('${ids[2]}','011', '017', 1.70),
    ('${ids[3]}','017', '011', 2.70),
    ('${ids[4]}','011', '018', 0.90),
    ('${ids[5]}','018', '011', 1.90)    
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ddds");
  }
}
