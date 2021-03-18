import {  Column, Entity, ManyToMany, UpdateDateColumn } from 'typeorm';
import { IsString , IsEmail,Min,Max,MinLength,IsAlpha, MaxLength} from 'class-validator'
import { Students } from 'src/students/students.entity';
import { BaseEntity } from './base.entity';

@Entity('intermed')
export class Intermeds extends BaseEntity{
  /*
  Intermediate table for students and courses
  */
    @Column({type:'varchar',length:50,nullable: false}) 

    studentID: string;

    @Column({type:'varchar',length:50,nullable: false})
    courseID: string;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({type:'varchar',length:50,nullable: true}) 

    registered_courses: string;

    @Column({type:'varchar',length:50,})
    course_name: string;


 /* @ManyToMany(type=> Students, student=> student.course)
  student: Students
  @ManyToMany(type=> Courses, course=>course.student) 
  course: Courses[]; */

}

