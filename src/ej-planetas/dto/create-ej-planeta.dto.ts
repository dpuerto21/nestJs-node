import { IsNumber, IsString } from 'class-validator';

export class CreateEjPlanetaDto {
	@IsString() nombre: string;
	@IsNumber() tamaño: number;
	@IsString() color: string;
	@IsNumber() temperatura: number;
	@IsNumber() gravedad: number;
}
