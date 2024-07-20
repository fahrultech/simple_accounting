import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueConstraintToPerkiraan1721396628833 implements MigrationInterface {
    name = 'AddUniqueConstraintToPerkiraan1721396628833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE perkiraan ADD CONSTRAINT UQ_no_perkiraan UNIQUE (no_perkiraan)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE perkiraan DROP INDEX UQ_no_perkiraan`);
    }

}
