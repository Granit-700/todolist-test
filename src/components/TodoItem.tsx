import { useState } from "react";
import type { TodoItemProps } from "../types";
import TodoEdit from "./TodoEdit";
import TodoRemove from "./TodoRemove";

const TodoItem = ({ todo, deleteTodo, updateTodo }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      {isOpen === true
        ?
        <TodoEdit
          updateTodo={updateTodo}
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
          <TodoRemove deleteTodo={deleteTodo} currentId={todo.id} />
        </>
      }
    </li>
  );
};

export default TodoItem;
