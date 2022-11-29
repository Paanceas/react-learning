import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { UseCounter, useFetch } from "../../src/hooks";


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/UseCounter');

describe('´pruebas en el componente MultipleCustomHooks', () => { 

    const mockIncrement = jest.fn();
    UseCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data: null, 
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('loading...'))
        expect(screen.getByText('multiple custom'))
        const nextButton = screen.getByRole('button',{name:"Next quote"});
        expect(nextButton.disabled).toBeTruthy();
     });
    
    test('should de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }], 
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button',{name:"Next quote"});
        expect(nextButton.disabled).toBeFalsy();
     });

     test('should llamar la función de incrementar', () => { 
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }], 
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button',{name:"Next quote"});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
      });

 });