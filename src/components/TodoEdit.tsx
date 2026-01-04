import { useState } from "react";
import type { TodoEditProps } from "../types";

const TodoEdit = ({ updateTodo, todo, setIsOpen }: TodoEditProps) => {
  const [text, setText] = useState(todo.text);

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (updateTodo({ id: todo.id, text })) {
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

  );
};

export default TodoEdit;
