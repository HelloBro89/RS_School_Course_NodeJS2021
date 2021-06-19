import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1624119032259 implements MigrationInterface {


    // eslint-disable-next-line class-methods-use-this
    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.query(`CREATE TABLE "column_in_board" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "title" VARCHAR(300) NOT NULL,
            "order" INTEGER NOT NULL,
            "boardId" UUID NOT NULL,
            CONSTRAINT "PK_columnTable" PRIMARY KEY ("id")
          )`);

        await queryRunner.query(`CREATE TABLE "user" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "name" VARCHAR(300) NOT NULL,
            "login" VARCHAR(300) NOT NULL,
            "password" VARCHAR(300) NOT NULL,
            CONSTRAINT "PK_userTable" PRIMARY KEY ("id")
          )`);

        await queryRunner.query(`CREATE TABLE "board" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "title" VARCHAR(300) NOT NULL,
            CONSTRAINT "PK_boardTable" PRIMARY KEY ("id")
          )`);

        await queryRunner.query(`CREATE TABLE "task" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "title" VARCHAR(300) NOT NULL,
            "order" INTEGER NOT NULL,
            "description" VARCHAR(300) NOT NULL,
            "boardId" UUID NOT NULL,
            "columnId" UUID,
            "userId" UUID,
            CONSTRAINT "PK_taskTable" PRIMARY KEY ("id")
          )`);

        await queryRunner.query(`ALTER TABLE "task"
          ADD CONSTRAINT "FK_del_task_if_del_board"
          FOREIGN KEY ("boardId") REFERENCES "board"("id")
          ON DELETE CASCADE ON UPDATE NO ACTION
        `);

        await queryRunner.query(`ALTER TABLE "column_in_board"
            ADD CONSTRAINT "FK_del_col_in_bord"
            FOREIGN KEY ("boardId") REFERENCES "board"("id")
            ON DELETE CASCADE ON UPDATE NO ACTION
          `);

        await queryRunner.query(`ALTER TABLE "task"
          ADD CONSTRAINT "FK_set_null_if_del_user"
          FOREIGN KEY ("userId") REFERENCES "user"("id")
          ON DELETE SET NULL ON UPDATE NO ACTION
        `);

        await queryRunner.query(`ALTER TABLE "task"
            ADD CONSTRAINT "FK_set_null_if_col_del"
            FOREIGN KEY ("columnId") REFERENCES "column_in_board"("id")
            ON DELETE SET NULL ON UPDATE NO ACTION
          `);
    }

    // eslint-disable-next-line class-methods-use-this
    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`ALTER TABLE "task"
        DROP CONSTRAINT "FK_set_null_if_del_user"
      `);

        await queryRunner.query(`ALTER TABLE "task"
        DROP CONSTRAINT "FK_del_task_if_del_board"
      `);

        await queryRunner.query(`ALTER TABLE "task"
        DROP CONSTRAINT "FK_set_null_if_col_del"
      `);

        await queryRunner.query(`ALTER TABLE "column_in_board"
        DROP CONSTRAINT "FK_del_col_in_bord"
      `);


        await queryRunner.query('DROP TABLE "board"')
        await queryRunner.query('DROP TABLE "task"');
        await queryRunner.query('DROP TABLE "user"');;
        await queryRunner.query('DROP TABLE "column_in_board"');
    }

}
