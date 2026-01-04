import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { TodoListType, UpdateTodoParams } from "./types";
import TodoToolbar from "./components/TodoToolbar";

function TodoApp() {

  const [todos, setTodos] = useState<TodoListType>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText) {
      setTodos([...todos, {
        id: Date.now(),
        text: trimmedText,
        isDone: false
      }]);
    };
  };

  const deleteTodo = (currentId: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== currentId);
    setTodos(filteredTodos);
  };

  const deleteAllTodos = () => setTodos([]);

  const updateTodo = ({ id, text, isDone }: UpdateTodoParams): boolean => {
    if (text !== undefined && !text.trim()) return false;

    setTodos(todos.map(todo =>
      todo.id === id
        ? {
          ...todo,
          ...(text !== undefined ? { text: text.trim() } : {}),
          ...(isDone !== undefined ? { isDone } : {}),
        }
        : todo
    ));

    return true;
  };

  console.log(todos);


  return (
    <div>
      <TodoInput createTodo={createTodo} />
      <TodoToolbar deleteAllTodos={deleteAllTodos} todosCount={todos.length} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
