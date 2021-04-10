import { Controller, Get } from '@nestjs/common';
import { AllowAnyRole, Roles, Unprotected } from 'nest-keycloak-connect';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('/public')
  @Unprotected()
  getpublic(): string {
    return `${this.appService.getHello()} from public`;
  }
  
@Get('/user')
  @Roles('user')
  getUser(): string {
    return `${this.appService.getHello()} from user`;
  }
@Get('/admin')
  @Roles('admin')
  getAdmin(): string {
    return `${this.appService.getHello()} from admin`;
  }
@Get('/all')
  @AllowAnyRole()
  getAll(): string {
    return `${this.appService.getHello()} from all`;
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
