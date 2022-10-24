import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('pruebas de 06-deses-obj', () => { 
    test('should usContext devuelve un Objeto', () => { 
        const nombre = 'Pablo'    ;
        const edad = 24;

        const resp = usContext({
            clave: nombre,
            edad: edad
        })
        
        expect(resp).toEqual({
            nombreClave: 'Pablo',
            anios: 24,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })    
});