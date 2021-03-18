import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/courses/courses.entity';
import { Students } from 'src/students/students.entity';
import { Repository } from 'typeorm';
import { Intermeds } from './intermed.entity';

@Injectable()
export class IntermedService 
{
    constructor(@InjectRepository(Courses)
    private courseRep: Repository<Courses>,
    @InjectRepository(Students)
    private studentRep: Repository<Students>,
    @InjectRepository(Intermeds)
    private intermedRep: Repository<Intermeds>
    )
    {}
    async showAll(){
    //implementation
    return await this.intermedRep.find();
     }
  
     async create(data: Intermeds){
         //implementation
         const inter = await this.intermedRep.create(data);
         await this.intermedRep.save(inter);
         return inter;
    }
     async read(id:string) {
          //implementation
          const inter = await this.courseRep.findOne({where: {id} });
          if(!inter){
             throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
         }
         return inter;
     }
     async update(id:string,data:Partial<Intermeds>){
          //implementation
          let inter = await this.intermedRep.update( id ,data);
          if(!inter){
             throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
         }
           await this.intermedRep.findOne(id);
           return inter;
     }
     
     async destroy(id:string){
        //implementation  
        const inter = await this.intermedRep.delete(id);
        if(!inter){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
        }
        await this.intermedRep.delete(id);
        return inter;
     }
}

