import { useTodo } from '../hooks';
import { TodoList, TodoAdd } from './';



export const TodoApp = () => { 

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, allTodos, pendingTodosCount } = useTodo();

    return (
        <>
            <h1>TodoApp {allTodos}, <small>pendientes: {pendingTodosCount} </small> </h1>
            <hr /> 

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
}
