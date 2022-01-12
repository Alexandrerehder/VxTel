import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HistoryCalls1640343594754 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "history", // Nome da tabela
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
            name: "plano",
            type: "varchar",
          },
          {
            name: "minutos",
            type: "numeric",
          },
          {
            name: "semPlano",
            type: "numeric",
          },
          {
            name: "comPlano",
            type: "numeric",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("history");
  }
}
