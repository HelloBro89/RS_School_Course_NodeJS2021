import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './common/ormconfig';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { };
