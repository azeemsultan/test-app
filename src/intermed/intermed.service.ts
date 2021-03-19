import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/courses/courses.entity';
import { Students } from 'src/students/students.entity';
import { Repository } from 'typeorm';
import { Intermeds } from './intermed.entity';

@Injectable()
export class IntermedService 
{
    constructor(@InjectRepository(Intermeds)
    private intermedRep: Repository<Intermeds>,
    @InjectRepository(Students)
    private studentRep: Repository<Students>,
    @InjectRepository(Courses)
    private courseRep: Repository<Courses>
    )
    {}
    async create(data:Intermeds){
        let studid=data.studentID;
        let courid=data.courseID;
        const student = await this.studentRep.findOne({id:studid});
        const course  = await this.courseRep.findOne({id:courid});
    
     console.log(""+student+course+'haha');
        if(!student||!course){
            return "enter valid course and student id";
        }
    
        const max= await this.intermedRep.find({studentID:studid});
     

        if(max.length>=6){
            return "A student can register max 6 courses";
        }
        const cLimit = await this.intermedRep.find({courseID:courid});
        if(cLimit.length>=course.stlimit){
            return " "+course.name+" can have max limit of "+course.stlimit +" ";
        }
        const hasboth= await this.intermedRep.findOne({courseID:courid,studentID:studid});
        if(hasboth){
            return "Student already exist in register table";
        }
        const newReg=await this.intermedRep.create(data);
        await this.intermedRep.save(newReg);
        return newReg;
    }
    async findwithid(id:string){
        let i=parseInt(id);
        return await this.intermedRep.find({studentID:i});
    }
    
    /*
    async showAll(){
    //implementation
    return await this.intermedRep.find();
     }
  
     async create(data: Intermeds){
         //implementation
         let sid=data.studentID;
         let courid=data.courseID;
       
         const student = await this.studentRep.findOne({id:sid});
         const course  = await this.courseRep.findOne({id:courid});

        // const inter = await this.intermedRep.create(data);
        // await this.intermedRep.save(inter);
        // return inter;
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
     */
}

/*
async create(data:Course_Management){
    let sid=data.student_id;
    let courid=data.course_id;
    const student = await this.studentRep.findOne({id:sid});
    const course  = await this.courseRep.findOne({id:courid});


    if(!student||!course){
        return "enter valid course and student id";
    }

    const sLimit= await this.CourseManage.find({student_id:sid});
    if(sLimit.length>6){
        return "a student can be registered to maximuim 6 courses";
    }
    const cLimit = await this.CourseManage.find({course_id:courid});
    if(cLimit.length>course.studentlimit){
        return "course: "+course.coursename+" can have maximuim limit of "+course.studentlimit +" ";
    }
    const hasboth= await this.CourseManage.findOne({course_id:courid,student_id:sid});
    if(hasboth){
        return "student already in registered to the course";
    }
    const newReg=await this.CourseManage.create(data);
    await this.CourseManage.save(newReg);
    return newReg;
}
*/