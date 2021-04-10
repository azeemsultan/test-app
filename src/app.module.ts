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
import { IntermedModule } from './intermed/intermed.module';
import {
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [  KeycloakConnectModule.register({
    authServerUrl: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'myclient',
    secret: '47188bdc-53bf-4a5f-98cc-631c4b2e3ac3',
    // Secret key of the client taken from keycloak server
  }),
    TypeOrmModule.forRoot(config), CoursesModule, StudentsModule, IntermedModule],

  controllers: [AppController]
  ,
  providers: [AppService,    {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: ResourceGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RoleGuard,
  }
  ,{
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  },{
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor
  }],
})
export class AppModule {}
