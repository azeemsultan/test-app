import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from 'src/courses/courses.entity';
import { Students } from 'src/students/students.entity';
import { IntermedController } from './intermed.controller';
import { Intermeds } from './intermed.entity';
import { IntermedService } from './intermed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Intermeds,Courses,Students])],
  controllers: [IntermedController],
  providers: [IntermedService]
})
export class IntermedModule {}
