import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export class CreatePlanos1639429062616 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "planos", // Nome da tabela
        columns: [
          {
            name: "id", // Nome da coluna
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "tempo",
            type: "int",
          },
        ],
      })
    );

    const ids = [];
    for (let i = 0; i < 4; i += 1) {
      ids.push(uuidv4());
    }

    await queryRunner.query(
      `INSERT INTO PLANOS(id, nome, tempo)
          values('${ids[0]}', 'FaleMais 30', 30),
          ('${ids[1]}','FaleMais 60', 60),
          ('${ids[2]}','FaleMais 120', 120)
            `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("planos");
  }
}
