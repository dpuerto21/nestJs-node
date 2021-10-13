import { Injectable } from '@nestjs/common';
import { CreateEjPlanetaDto } from './dto/create-ej-planeta.dto';
import { UpdateEjPlanetaDto } from './dto/update-ej-planeta.dto';
import { EjPlaneta } from './entities/ej-planeta.entity';

@Injectable()
export class EjPlanetasService {
	private CounterId = 1;
	private planeta: EjPlaneta[] = [
		{
			id: 1,
			nombre: 'planeta1',
			color: 'azul',
			gravedad: 12.5,
			tamaño: 45.2,
			temperatura: 5
		}
	];

	crear(payload: any) {
		this.CounterId = this.CounterId + 1;
		const newPlanet = {
			id: this.CounterId,
			...payload
		};
		this.planeta.push(newPlanet);
		return newPlanet;
	}
	findAll() {
		return this.planeta;
	}

	findOne(id: number) {
		return this.planeta.find((item) => item.id === id);
	}

	update(id: number, createplaneta: UpdateEjPlanetaDto) {
		return {
			message: `This action updates a #${id} ejPlaneta`,
			createplaneta
		};
	}

	remove(id: number) {
		return {
			message: `This action removes a #${id} ejPlaneta`
		};
	}

	// getPlaneta(Params: number) {
	// 	return {
	// 		message: `Esta peticion te da un nombre de un planeta `,
	// 		Params
	// 	};
	// }
	createplaneta(createPlaneta: CreateEjPlanetaDto) {
		return {
			message: 'Planeta creado',
			createPlaneta
		};
	}
}
