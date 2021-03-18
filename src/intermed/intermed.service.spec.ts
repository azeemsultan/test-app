import { Test, TestingModule } from '@nestjs/testing';
import { IntermedService } from './intermed.service';

describe('IntermedService', () => {
  let service: IntermedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntermedService],
    }).compile();

    service = module.get<IntermedService>(IntermedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
