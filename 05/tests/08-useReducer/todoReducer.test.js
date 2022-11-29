import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en el TODO reducer', () => { 
    
    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false
    }]


    test('should regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
     });


    test('should agregar un ToDo', () => { 

    const action = {
        type: '[TODO] Add Todo',
        payload: {
            id:2,
            description: 'Nuevo todo #2',
            done: false
        }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
    });

    test('should eliminar un ToDo', () => { 
        const action = {
            type: 'TODO] Remove Todo',
            payload: {
                id:1,
                description: 'Nuevo todo #2',
                done: false
            }
        };
    
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
    });
      
    test('should hacer el toggle', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: {
                id:1,
                description: 'Nuevo todo #2',
                done: false
            }
        };
    
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBe(true);
    });
 });