import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './common/ormconfig';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from './logger/filter-exeption';
import { LogingInterceptor } from './logger/loging-interceptor';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, BoardsModule, TasksModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
    {
      provide: APP_INTERCEPTOR,
      useClass: LogingInterceptor,
    }
  ]
})
export class AppModule { };
