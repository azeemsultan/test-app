import {  Column, Entity, ManyToMany, UpdateDateColumn } from 'typeorm';
import { IsString , IsEmail,Min,Max,MinLength,IsAlpha, MaxLength} from 'class-validator'
import { Students } from 'src/students/students.entity';
import { BaseEntity } from './base.entity';

@Entity('intermed')
export class Intermeds extends BaseEntity{
  /*
  Intermediate table for students and courses
  */
  @Column({type:"int",nullable:false})

    studentID: number;

    @Column({type:"int",nullable:false})
    courseID: number;





}

