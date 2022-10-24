import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('pruebas para 08-imp-exp', () => { 
    test('should getHeroeById debe retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });
    test('should getHeroeById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();
    });
    test('should getHeroesByOwner dene retornar un arreglo con los heroes de DC (3)', () => { 
        const owner = 'DC';
        const listHeroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];
        const heroes = getHeroesByOwner(owner);
       
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(listHeroes);
    });
    test('should getHeroesByOwner dene retornar un arreglo con los heroes de Marvel (2)', () => { 
        const owner = 'Marvel';
        const listHeroes = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ];
        const heroes = getHeroesByOwner(owner);
       
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(listHeroes);
    });
});