import {  Column, Entity, ManyToMany, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IsString , IsEmail,Min,Max,MinLength,IsAlpha, MaxLength} from 'class-validator'
import { Students } from 'src/students/students.entity';
@Entity('courses')

export class Courses extends BaseEntity {
  /*
Fields for Courses:
Course Name
Students Limit (Numeric)
  */
  @Column({type:'varchar',length:50,nullable: false})
   @IsAlpha()
    name: string;
    @Column({type:'varchar',length:50,nullable: false})
    @MaxLength(50)
    @MinLength(1)
  stlimit: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(type=> Students, student=> student.course)
  student: Students
  @ManyToMany(type=> Courses, course=>course.student) 
  course: Courses[];

}

