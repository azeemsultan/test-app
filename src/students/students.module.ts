import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './students.controller';
import { Students } from './students.entity';
import { StudentsService } from './students.service';

@Module({
  imports: [TypeOrmModule.forFeature([Students]),
  ClientsModule.register([
    {
      name: 'STUDENT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://jmhtekkg:OPnk3kzAD5PcqRUDKiiAFknc0J6Ka6Rv@gerbil.rmq.cloudamqp.com/jmhtekkg'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ]),
],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
