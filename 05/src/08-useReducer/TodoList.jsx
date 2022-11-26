import { TodoItem } from "./";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={ todo => onDeleteTodo(todo) } onToggleTodo={ todo => onToggleTodo(todo) } />
      ))}
    </ul>
  );
};
