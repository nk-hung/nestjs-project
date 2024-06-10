import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  all(): string {
    return this.productService.getAll();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return this.productService.getOne(id);
  }
}
