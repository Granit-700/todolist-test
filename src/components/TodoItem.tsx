import { useState } from "react";
import type { TodoItemProps } from "../types";
import TodoEdit from "./TodoEdit";
import TodoRemove from "./TodoRemove";

const TodoItem = ({ todo, deleteTodo, updateTodo }: TodoItemProps) => {
  const [isOpen, setIopen] = useState(false);

  return (
    <li>
      <div style={{ display: "inline-block" }}>
        <p>{todo.text}</p>
      </div>
      <TodoEdit
        updateTodo={updateTodo}
        todo={todo}
        isOpen={isOpen}
        setIopen={setIopen}
      />
      <TodoRemove deleteTodo={deleteTodo} currentId={todo.id} />
    </li>
  );
};

export default TodoItem;
