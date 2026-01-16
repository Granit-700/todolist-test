import "./TodoList.css";
import { useTodos } from "../../todoStore";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {

  const todos = useTodos();

  return (
    <>
      {todos.length > 0 && (
        <ul className="TodoList">
          {todos.map(todo => <TodoItem
            key={todo.id}
            todo={todo}
          />)}
        </ul>
      )}
      {todos.length === 0 && <div>Empty</div>}
    </>
  );
};

export default TodoList;
