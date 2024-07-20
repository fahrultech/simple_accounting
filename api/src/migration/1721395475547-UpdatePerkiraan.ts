import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePerkiraan1721395475547 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE perkiraan ADD CONSTRAINT UQ_no_perkiraan UNIQUE (no_perkiraan)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE perkiraan DROP INDEX UQ_no_perkiraan`);
    }

}
