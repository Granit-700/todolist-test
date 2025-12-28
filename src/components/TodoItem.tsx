import type { TodoItemProps } from "../types";
import TodoRemove from "./TodoRemove";

const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => {
  return (
    <li>
      <div style={{display: "inline-block"}}>
        <p>{todo.text}</p>
      </div>
      <TodoRemove deleteTodo={deleteTodo} currentId={todo.id}/>
    </li>
  );
};

export default TodoItem;
