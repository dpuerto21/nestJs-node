import { Controller, Get, Param } from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {
	@Get(':id/product/:productId')
	getcategorias(@Param('id') id: any, @Param('productId') productId: any) {
		return `categoriaId ${id} productId ${productId}  `;
	}
}
