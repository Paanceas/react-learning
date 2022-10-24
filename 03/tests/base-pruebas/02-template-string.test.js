import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('test template-string', () => { 
    test('getSaludo debe de retornar Hola Pablo', () => { 
        const name = "Pablo";
        const message = getSaludo(name);
        expect(message).toBe(`Hola Pablo`);
    });
 });