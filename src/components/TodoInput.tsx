import { useState } from "react";
import { useCreateTodo } from "../todoStore";

const TodoInput = () => {
  const [value, setValue] = useState("");

  const createTodo = useCreateTodo();

  return (
    <div>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => {
          createTodo(value);
          setValue("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
