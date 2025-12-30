import { useState } from "react";
import type { TodoItemProps } from "../types";
import TodoEdit from "./TodoEdit";
import TodoRemove from "./TodoRemove";

const TodoItem = ({ todo, deleteTodo, updateTodo }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isChecked, setIsChecked] = useState<boolean>(todo.isDone);

  return (
    <li>
      <span>{todo.text}</span>
      <input
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        onChange={e => e.target.checked}
      />
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
