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
        return await this.courseRep.find();
     
     }
     /*
     async create(userId: string,data: Courses){
         const studet = await this.studentRep.findOne({where: {id:'14'}})
     
         const crse = await this.courseRep.create({...data, student:ob});
         var ob = {Total: crse.stlimit-1,f:studet.email}
         await this.courseRep.save(crse);
         return {...crse, Total:crse.stlimit-1, f: studet.email};
     }
     */
     async create(data: Courses){
        const course = await this.courseRep.create(data);
        await this.courseRep.save(course);
        return course;
    }
     async read(id:string) {
         const course = await this.courseRep.findOne({where: {id} });
         if(!course){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
        return course;
     }
     async update(id:string, data:Partial<Courses>){
         let course = await this.courseRep.update( id ,data);
         if(!course){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
          await this.courseRep.findOne(id);
          return course;
     
     }
     
     async destroy(id:string){
        const course = await this.courseRep.delete(id);
        if(!course){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
        await this.courseRep.delete(id);
        return course;
     }
     
     }
     

