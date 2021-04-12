import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors, UsePipes } from '@nestjs/common';
import { StudentDTO } from './student.dto';
import { multerOptions, Students } from './students.entity';
import { StudentsService } from './students.service';
import {ValidationPipe} from '../shared/validation.pipe'
import { FilesInterceptor } from '@nestjs/platform-express';
import { fileURLToPath } from 'node:url';
import { AllowAnyRole, Roles, Unprotected } from 'nest-keycloak-connect';
@Controller('students')
export class StudentsController {
    private logger = new Logger('studentsController')
    constructor(private studentService: StudentsService){}
    @Get()
    showAllStudents(){
        return this.studentService.showAll();
    }
    @Post('/upload') 
   @UseInterceptors(FilesInterceptor('file',null,multerOptions))
    async uploadFile(@UploadedFiles() file){
        console.log(file)
    }

    @Post()
    @UsePipes(new ValidationPipe()) // Using validationPipe for validation and sanitization
    createStudent(@Body() data:Students){
        this.logger.log(JSON.stringify(data)) //logs the object data using stringify method
        return this.studentService.create(data) 


    }
  
    @Get(':id')
  
    readStudent(@Param('id') id:string){
        return this.studentService.read(id);
    }
  
    @Get('/user/:name')
    readuser(@Param('name') name:string){
        return this.studentService.readUser(name);
        
    }
  
    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateStudent(@Param('id') id:string, @Body() data: Partial<Students>){ 
        this.logger.log(JSON.stringify(data))
        return this.studentService.update(id,data);
    }

    @Delete(':id')
    destroyStudent(@Param('id') id:string){
        return this.studentService.destroy(id);
    }
}
