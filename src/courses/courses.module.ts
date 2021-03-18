import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from 'src/students/students.entity';
import { CoursesController } from './courses.controller';
import { Courses } from './courses.entity';
import { CoursesService } from './courses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Courses,Students])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
