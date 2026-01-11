import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoToolbar from "./components/TodoToolbar";
import { useTodos } from "./todoStore";

function TodoApp() {

  const todos = useTodos();

  // debug
  console.log(todos);

  return (
    <div>
      <TodoInput />
      <TodoToolbar />
      <TodoList />
    </div>
  );
};

export default TodoApp;
