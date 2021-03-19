import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from 'src/students/students.entity';
import { Repository } from 'typeorm';
import { Courses } from './courses.entity';

@Injectable()
export class CoursesService {
    constructor(@InjectRepository(Courses)
private courseRep: Repository<Courses>,
@InjectRepository(Students)
private studentRep: Repository<Students>
)
{}


    async showAll(){
        return await this.courseRep.find(); //returns all courses
     
     }
   
     async create(data: Courses){ 
        const course = await this.courseRep.create(data); //stores course data in course variable
        await this.courseRep.save(course); //saves in table
        return course;
    }
     async read(id:string) { //returns course with specific id
         const course = await this.courseRep.findOne({where: {id} }); //stores data in course
         if(!course){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
        return course;
     }
     async update(id:string, data:Partial<Courses>){
         let course = await this.courseRep.update( id ,data); //fetches record with specific id
         if(!course){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
          await this.courseRep.findOne(id); 
          return course; //updates the record
     
     }
     
     async destroy(id:string){
        const course = await this.courseRep.delete(id); //fetches record with id
        if(!course){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
        await this.courseRep.delete(id); //delete the record
        return course;
     }
     
     }
     

