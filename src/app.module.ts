import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {config} from './orm.config'
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
@Module({
  imports: [TypeOrmModule.forRoot(config), CoursesModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  },{
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }],
})
export class AppModule {}
