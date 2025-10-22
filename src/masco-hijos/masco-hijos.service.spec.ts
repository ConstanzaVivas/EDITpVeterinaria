import { Test, TestingModule } from '@nestjs/testing';
import { MascoHijosService } from './masco-hijos.service';

describe('MascoHijosService', () => {
  let service: MascoHijosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MascoHijosService],
    }).compile();

    service = module.get<MascoHijosService>(MascoHijosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
