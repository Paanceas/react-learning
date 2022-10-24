import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => { 
    
    const value = 100;
     
    test('debe de hacer un match con el snapshot', () => { 
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });
    
    test('debe de mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
        expect(parseInt(screen.getByText(value).innerHTML)).toBe(value);
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain("100");
    });

    test('debe incrementar con el botón +1', () => { 
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(value+1)).toBeTruthy();
    });

    test('debe incrementar con el botón -1', () => { 
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText(value-1)).toBeTruthy();
    });

    test('debe de funcionar el botón reset', () => { 
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));

        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText(value)).toBeTruthy();
    });
    
});