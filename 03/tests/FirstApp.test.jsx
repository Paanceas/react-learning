import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => { 
    const title = 'Hola, soy Goku';
     

    test('debe de hacer un match con el snapshot', () => { 
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });  

    test('debe de mostrar el titulo en un H1', () => { 
        const { container, getByText } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toBe(title);
        expect(h1.innerHTML).toContain(title);
    });
});