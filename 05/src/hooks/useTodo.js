import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [pendingTodosCount, setPendingTodosCount] = useState(todos.length);
    const [allTodos, setAllTodos] = useState(todos.length);

    const handleNewTodo = (todo) => {
      const action = {
        type: '[TODO] Add Todo',
        payload: todo
      }
      dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
      dispatch({
        type: '[TODO] Remove Todo',
        payload: todo
      });
    }

    const handleToggleTodo = (todo) => {
        const action = {
          type: '[TODO] Toggle Todo',
          payload: todo
        }
        dispatch(action);
      }

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
      setPendingTodosCount(todos.filter(todo=> !todo.done).length);
      setAllTodos(todos.length);
    }, [todos])

  return {
    todos,
    pendingTodosCount,
    allTodos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
