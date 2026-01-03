import { useState } from "react";
import type { TodoItemProps } from "../types";
import TodoEdit from "./TodoEdit";
import TodoRemove from "./TodoRemove";

const TodoItem = ({ todo, deleteTodo, updateTodo }: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isChecked, setIsChecked] = useState<boolean>(todo.isDone);

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
            checked={isChecked}
            onClick={() => {
              // костыль: функция вызывается в двух местах
              updateTodo(todo.id, todo.text, !isChecked);
              setIsChecked(!isChecked);
            }}
            onChange={e => e.target.checked}
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
