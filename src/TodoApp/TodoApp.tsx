import "./reset.css";
import "./style.css";
import TodoHeader from "../components/Header/Header";
import TodoInput from "../components/TodoAdd/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import TodoToolbar from "../components/TodoToolbar/TodoToolbar";
import { useTodos } from "../todoStore";

function TodoApp() {
  const todos = useTodos();

  // debug
  console.log(todos);

  return (
    <div id="TodoApp">
      <TodoHeader />
      <TodoInput />
      <TodoToolbar />
      <TodoList />
    </div>
  );
};

export default TodoApp;
