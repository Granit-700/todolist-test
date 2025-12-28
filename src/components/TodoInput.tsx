import { useState } from "react";
import type { TodoInputProps } from "../types";

const TodoInput = ({ createTodo }: TodoInputProps) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => createTodo(value)}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
