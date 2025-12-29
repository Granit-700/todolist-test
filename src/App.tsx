import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const initTodos = [
    {
      id: 1,
      text: "todo"
    },
    {
      id: 2,
      text: "todo"
    },
  ];

  const [todos, setTodos] = useState(initTodos);

  const createTodo = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText) {
      setTodos([...todos, { id: Date.now(), text: trimmedText }]);
    };
  };

  const deleteTodo = (currentId: number) => {
    const filteredTodos = todos.filter(todo => todo.id !== currentId);
    setTodos(filteredTodos);
  };

  const updateTodo = (currentId: number, newText: string) => {
    const trimmedText = newText.trim();
    if (!trimmedText) return;
    setTodos(todos.map(todo =>
      todo.id === currentId ? { ...todo, text: newText } : todo
    ));
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

export default App;
