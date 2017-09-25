import { Injectable } from '@angular/core';

import { Producto } from '../../../domain/producto';
import { PRODUCTOS } from './mock-productos';

@Injectable()
export class ProductosService {
  getProducts(): Producto[] {
    return PRODUCTOS;
  }
}