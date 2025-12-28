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
    setTodos([...todos, {id: Date.now(), text: text}])
  };

  return (
    <div>
      <TodoAdd createTodo={createTodo}/>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
