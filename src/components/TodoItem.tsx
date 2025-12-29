import { useState } from "react";
import type { TodoItemProps } from "../types";
import TodoEdit from "./TodoEdit";
import TodoRemove from "./TodoRemove";

const TodoItem = ({ todo, deleteTodo, updateTodo }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <span>{todo.text}</span>
      <TodoEdit
        updateTodo={updateTodo}
        todo={todo}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <TodoRemove deleteTodo={deleteTodo} currentId={todo.id} />
    </li>
  );
};

export default TodoItem;
