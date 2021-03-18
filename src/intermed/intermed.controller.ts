import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { Intermeds } from './intermed.entity';
import { IntermedService } from './intermed.service';

@Controller('intermed')
export class IntermedController {
    private logger = new Logger('coursesController')
    constructor(private intermedService: IntermedService){}

    @Get()
    showAllCourses(){
        return this.intermedService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createStudent(@Body() data:Intermeds){
       
        return this.intermedService.create(data)

    }
    /*
    createCourse(id:'1' , @Body() data:Courses){
        this.logger.log(JSON.stringify(data))
        this.logData({id,data})
        return this.courseService.create(id,data)    
    }*/

    @Get()
        //implementation
        readCourse(@Param('id') id:string){
            return this.intermedService.read(id);
    }

    @Put()
    @UsePipes(new ValidationPipe())
    updateCourse(@Param('id') id:string, @Body() data: Partial<Intermeds>){
        this.logger.log(JSON.stringify(data))
        return this.intermedService.update(id,data);
    }

    @Delete(':id')
       destroyCourse(@Param('id') id:string){
        return this.intermedService.destroy(id);
    }


}
