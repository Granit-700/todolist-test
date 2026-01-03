import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { TodoListType } from "./types";

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

  const updateTodo = (currentId: number, newText: string): boolean => {
    const trimmedText = newText.trim();
    if (!trimmedText) return false;
    setTodos(todos.map(todo =>
      todo.id === currentId
        ? { ...todo, text: trimmedText}
        : todo
    ));

    return true;
  };

  return (
    <div>
      <TodoInput createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
