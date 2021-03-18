import { Body, Controller, Delete, Get, HttpException, HttpStatus, Logger, Param, Post, Put, UsePipes } from '@nestjs/common';
import { StudentDTO } from './student.dto';
import { Students } from './students.entity';
import { StudentsService } from './students.service';
import {ValidationPipe} from '../shared/validation.pipe'
@Controller('students')
export class StudentsController {
    private logger = new Logger('studentsController')
    constructor(private studentService: StudentsService){}
    @Get()
    showAllStudents(){
        return this.studentService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createStudent(@Body() data:Students){
        this.logger.log(JSON.stringify(data))
        return this.studentService.create(data)


    }
    /*
    @Get(':username')
    readStudentUsername(@Body() username:string){
        return this.studentService.readUsername(username);
    }
*/
    @Get(':id')
    readStudent(@Param('id') id:string){
        return this.studentService.read(id);
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
