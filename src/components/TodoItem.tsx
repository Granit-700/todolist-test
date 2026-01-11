import { useState } from "react";
import type { TodoItemProps } from "../types";
import TodoEdit from "./TodoEdit";
import TodoRemove from "./TodoRemove";
import { useUpdateTodo } from "../todoStore";

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateTodo = useUpdateTodo();

  return (
    <li>
      {isOpen === true
        ?
        <TodoEdit
          todo={todo}
          setIsOpen={setIsOpen}
        />
        :
        <>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={e => {
              updateTodo({ id: todo.id, isDone: e.target.checked });
            }}
          />
          <button onClick={() => setIsOpen(true)}>
            Edit
          </button>
          <TodoRemove currentId={todo.id} />
        </>
      }
    </li>
  );
};

export default TodoItem;
