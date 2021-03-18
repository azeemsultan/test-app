import {  BeforeInsert, Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.enity';
import { IsString , IsEmail,Min,Max,MinLength,IsAlpha} from 'class-validator'
import * as bcrypt from "bcryptjs"
import * as jwt from 'jsonwebtoken'
import { response } from 'express';
import { Courses } from 'src/courses/courses.entity';
import { createParamDecorator, Logger } from '@nestjs/common';
let SECRET ='ABCf'
@Entity('students')

export class Students extends BaseEntity {

  @Column({type:'varchar',length:200,nullable: false})
    @IsString()
    @IsAlpha()
    name: string;
    
    @Column({type:'varchar',length:200,nullable: false,unique:true})
    @IsString()
    @MinLength(3)

  username: string;

    @Column({type:'text',nullable: false,unique:true})
    @IsEmail()
  email: string;

  @Column({type:'varchar',length:200,nullable: false})
  @IsString()
  @MinLength(6)
  password: string;

  @Column({type:'text',nullable: true,default:null})
  description: string;

  @ManyToMany(type=> Courses, course=>course.student) 
  course: Courses[];


  @BeforeInsert()
  async hashPassword(){
   this.password = await bcrypt.hash(this.password,5)
  }
  
  toResponseObject(){
   const {email, createdAt, username,id}= this;
   const responseObject = { email, createdAt , username, id};
   responseObject.id = id;
  
   return responseObject;
  }
async comparePassword(attempt: string){
  return await bcrypt.compare(attempt,this.password)
}


}

/*
  @Column({type:'varchar',length:50,nullable: false})
    Firstname: string;
    @Column({type:'varchar',length:50,nullable: false})
  Lastname: string;
  @Column({type:'varchar',length:50,nullable: false})
  email: string;
  @Column({type:'varchar',length:50,nullable: false})
  address: string;
  @Column({type:'varchar',length:50,nullable: false})
  password: string;
  @Column({type:'varchar',length:50,nullable: false})
  phone: string;
  @Column({type:'text',nullable: true,default:null})
  image: string;
}

First Name
Last Name
User name
Email
Password
Address
Phone Number
Image (Path or Image name as a string) */
export const User = createParamDecorator((data, req) => {
  return data ? req.student[data] : req.student;
});