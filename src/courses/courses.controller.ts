import { Controller, Logger, UsePipes } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { StudentDTO } from 'src/students/student.dto';
import { Students, User } from 'src/students/students.entity';
import { Courses } from './courses.entity';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    private logger = new Logger('coursesController')
    constructor(private courseService: CoursesService){}

    private logData(options:any){
        options.user && this.logger.log('USER'+JSON.stringify(options.user))
        options.data && this.logger.log('Data'+JSON.stringify(options.data))
        options.id && this.logger.log('courses'+JSON.stringify(options.id))
    }
    @Get()
    showAllCourses(){
        return this.courseService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createStudent(@Body() data:Courses){
        this.logger.log(JSON.stringify(data))
        return this.courseService.create(data)
    }
    /*
    createCourse(id:'1' , @Body() data:Courses){
        this.logger.log(JSON.stringify(data))
        this.logData({id,data})
        return this.courseService.create(id,data)    
    }*/

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
