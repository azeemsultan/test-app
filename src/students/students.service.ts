import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentDTO } from './student.dto';
import { Students } from './students.entity';

@Injectable()
export class StudentsService {
constructor(@InjectRepository(Students)
private studentRep: Repository<Students> )
{}

async showAll(){
   return await this.studentRep.find();

}
async create(data: Students){


    const student = await this.studentRep.create(data);
    await this.studentRep.save(student);
    return student;
}

async read(id:string) {
    const student = await this.studentRep.findOne({where: {id} });
    if(!student){
        throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
    }
    return student;
}
async readUsername(username:string) {
    const student = await this.studentRep.findOne({username:username});
    if(!student){
        throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
    }
    return student;
}
async update(id:string, data:Partial<StudentDTO>){
    let student = await this.studentRep.findOne({where: {id}})
    if(!student){
        throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND)
    }
    await this.studentRep.update( id ,data);
 
    return student;

}

async destroy(id:string){
    const student = await this.studentRep.findOne({where:{id}})
    if(!student){
        throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND)
    }
    await this.studentRep.delete(id);
    return student;
}

}
