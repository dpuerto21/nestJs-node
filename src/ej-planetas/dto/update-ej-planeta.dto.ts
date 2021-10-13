import { PartialType } from '@nestjs/mapped-types';
import { CreateEjPlanetaDto } from './create-ej-planeta.dto';

export class UpdateEjPlanetaDto extends PartialType(CreateEjPlanetaDto) {}
