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
   //returns all students

}
async create(data: Students){

     //Creates a student 
    const student = await this.studentRep.create(data);
    await this.studentRep.save(student);
    return student;
     
     
}

async read(id:string) {
    const student = await this.studentRep.findOne({where: {id} }); //finds and store id in student variable
    if(!student){
        throw new HttpException('Not Found',HttpStatus.NOT_FOUND)
    }
    return student;
    //returns student with specific ID
}
async readUser(name:string) {
    const username = await this.studentRep.findOne({username:name}); // Checks for username and store
    const email =  await this.studentRep.findOne({email:name});    //Checks for email and store
    if(username){
        return username;
      //returns username if username is searched
    }
    if(email)
    {
        return email;
        //returns email if user is searched by email
    }
    throw new HttpException('Not Found',HttpStatus.NOT_FOUND)

    
}
async update(id:string, data:Partial<StudentDTO>){
    let student = await this.studentRep.findOne({where: {id}}) //finds id and store it in student variable
    if(!student){
        throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND)
    }
    await this.studentRep.update( id ,data); //updates the student data
 
    return student;

}

async destroy(id:string){
    const student = await this.studentRep.findOne({where:{id}}) //finds the store the user id in student variable
    if(!student){
        throw new HttpException('NOT FOUND',HttpStatus.NOT_FOUND)
    }
    await this.studentRep.delete(id); //deletes the user with id
    return student;
}

}
