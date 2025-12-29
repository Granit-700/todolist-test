import { useState } from "react";
import type { TodoEditProps } from "../types";

const TodoEdit = ({ updateTodo, todo, isOpen, setIopen }: TodoEditProps) => {
  const [text, setText] = useState("");

  return (
    <>
      {isOpen === true ?
        (
          <>
            <input
              type="text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button
              onClick={
                () => {
                  updateTodo(todo.id, text);
                  setIopen(false);
                }
              }>
              Save
            </button>
          </>
        ) : (
          <button onClick={() => setIopen(true)}>
            Edit
          </button>
        )
      }
    </>
  );
};

export default TodoEdit;
