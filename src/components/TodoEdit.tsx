import { useState } from "react";
import type { TodoEditProps } from "../types";

const TodoEdit = ({ updateTodo, todo, isOpen, setIsOpen }: TodoEditProps) => {
  const [text, setText] = useState("");

  return (
    <>
      {isOpen === true
        ? (
          <>
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button
              onClick={() => {
                if (updateTodo(todo.id, text)) {
                  setIsOpen(false);
                };
              }}
            >
              Save
            </button>
            <button onClick={() => setIsOpen(false)}>
              close
            </button>
          </>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            Edit
          </button>
        )
      }
    </>
  );
};

export default TodoEdit;
