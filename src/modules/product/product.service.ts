import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getAll(): string {
    return 'get All';
  }

  getOne(id: string): string {
    return 'get one ' + id;
  }
}
