import { Test, TestingModule } from '@nestjs/testing';
import { EjPlanetasService } from './ej-planetas.service';

describe('EjPlanetasService', () => {
  let service: EjPlanetasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EjPlanetasService],
    }).compile();

    service = module.get<EjPlanetasService>(EjPlanetasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
