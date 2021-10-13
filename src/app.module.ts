import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { EjPlanetasModule } from './ej-planetas/ej-planetas.module';
import { BrandsController } from './controllers/brands.controller';
import { CostumersController } from './controllers/costumers.controller';
import { UsersController } from './controllers/users.controller';
@Module({
	imports: [ EjPlanetasModule ],
	controllers: [ AppController, ProductsController, CategoriasController, BrandsController, CostumersController, UsersController ],
	providers: [ AppService ]
})
export class AppModule {}
