import { Controller, Logger, UsePipes } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { StudentDTO } from 'src/students/student.dto';
import { Students } from 'src/students/students.entity';
import { Courses } from './courses.entity';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    private logger = new Logger('coursesController')
    constructor(private courseService: CoursesService){}

    @Get()
    showAllCourses(){ //returns all courses
        return this.courseService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe()) //ValidationPipe used for validation
    createStudent(@Body() data:Courses){
        this.logger.log(JSON.stringify(data)) //logs object data using stringify method
        return this.courseService.create(data)
    }
  

    @Get(':id')
    readCourse(@Param('id') id:string){
        return this.courseService.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateCourse(@Param('id') id:string, @Body() data: Partial<Courses>){
        this.logger.log(JSON.stringify(data))
        return this.courseService.update(id,data);
    }

    @Delete(':id')
    destroyCourse(@Param('id') id:string){
        return this.courseService.destroy(id);
    }
}
