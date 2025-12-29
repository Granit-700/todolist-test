import { useState } from "react";
import TodoAdd from "./components/TodoInput";
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
    setTodos([...todos, { id: Date.now(), text: text }]);
  };

  const deleteTodo = (currentId: number) => {
    const FilteredTodos = todos.filter(todo => todo.id !== currentId);
    setTodos(FilteredTodos);
  };

  const updateTodo = (currentId: number, newText: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === currentId) {
        return { id: currentId, text: newText };
      } else return todo;
    });
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <div>
      <TodoAdd createTodo={createTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
``