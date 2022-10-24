import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => { 
    test('should getImagen debe de retornar un url de la imagen', async() => { 
        const url = await getImagen();
        expect(url).toBe('No se encontro URL');
    });  
});