import {  BeforeInsert, Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.enity';
import { IsString , IsEmail,Min,Max,MinLength,IsAlpha} from 'class-validator'
import * as bcrypt from "bcryptjs"
import { Courses } from 'src/courses/courses.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
var fs = require('fs');

import {v4 as uuid} from 'uuid';
import {extname} from "path"
import {diskStorage} from "multer"

@Entity('students')

export class Students extends BaseEntity {

  @Column({type:'varchar',length:200,nullable: false})
    @IsString()
    @IsAlpha()
    name: string; //name must be string and alphanumberic
    
    @Column({type:'varchar',length:200,nullable: false,unique:true})
    @IsString() //username must be string and of minimum 3 characters
    @MinLength(3)

  username: string;

    @Column({type:'text',nullable: false,unique:true})
    @IsEmail() //must be email, contains @
  email: string;

  @Column({type:'varchar',length:200,nullable: false})
  @IsString()
  @MinLength(6)
  password: string;

  @Column({type:'text',nullable: true,default:null})
  @IsString()
  address: string;

  @Column({type:'text',nullable: true,default:null})
  @IsString()
  phone: string;

  @Column({type:'text',nullable: true,default:null})
  @IsString()
  image: string;

  @ManyToMany(type=> Courses, course=>course.student) 
  course: Courses[];


  @BeforeInsert()
  async hashPassword(){
   this.password = await bcrypt.hash(this.password,5)
  }
  
  toResponseObject(){
   const {email, createdAt, username,id}= this; //stores email,date,username,id
   const responseObject = { email, createdAt , username, id};
   responseObject.id = id;
  
   return responseObject;
  }
async comparePassword(attempt: string){
  return await bcrypt.compare(attempt,this.password)
}


}
export const multerConfig={
  dest:'uploads'
}
function uuidRandom(file){
  const result = `${uuid()}${extname(file.originalname)}`
  return result;
}
export const multerOptions = {
 
  fileFilter:(req:any, file:any, cb:any)=>{
   // var maxSize = 2 * 1000 * 1000;
  if(file.mimetype.match(/\/(jpg|jpeg|png|gif$)$/)) 
  {
    cb(null,true)
  }
  else{
    cb(new HttpException(`Unsupport file type ${extname(file.originalname)}`,HttpStatus.BAD_REQUEST),false)
  }
  },
  storage:diskStorage({
  destination:(req:any, file:any, cb:any)=>{
    const uploadPath = multerConfig.dest
    if(!fs.existsSync(uploadPath)){
      fs.mkdirSync(uploadPath)
    }
    cb(null,uploadPath)
  },
  filename:(req:any,file:any,cb:any)=>{
    cb(null,uuidRandom(file));
  }
  })
  
}
console.log(multerOptions)
/*
fields
Name
User name
Email
Password
Address
Phone Number
Image (Path or Image name as a string) */
