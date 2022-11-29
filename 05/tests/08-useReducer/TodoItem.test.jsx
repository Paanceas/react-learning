import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el component TodoItem', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should mostrar el ToDo pendiente de completar', () => { 
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center false');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('should mostrar el ToDo completado', () => { 
        todo.done = true;
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('align-self-center text-decoration-line-through');
    });

    test('should debe de llamar el ToggleTodo cuando se le hace click', () => { 
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo);
    });

    test('should debe de eliminar el todo al hace click en el botón', () => { 
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} /> );
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo);
    });

 });