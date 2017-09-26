import { Producto } from '../../../domain/producto';
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const productos: Producto[] = [
            {  
                id: 0,
                nombre: 'Coca',
                descripcion: 'description 1',
                precio: 35,
                imagen: 'imagen' 
            },
            {  
                id: 1,
                nombre: 'Sprite',
                descripcion: 'description 2',
                precio: 50,
                imagen: 'imagen2' 
            },
            {  
                id: 2,
                nombre: 'Fanta',
                descripcion: 'description 3',
                precio: 40,
                imagen: 'imagen3' 
            },
            {  
                id: 3,
                nombre: 'Manao',
                descripcion: 'description 4',
                precio: 10,
                imagen: 'imagen4' 
            }
        ];
        return {productos};
      }
    }
