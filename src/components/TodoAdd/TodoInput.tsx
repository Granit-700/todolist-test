import "./TodoAdd.css"
import { useState } from "react";
import { useCreateTodo } from "../../todoStore";

const TodoInput = () => {
  const [value, setValue] = useState("");

  const createTodo = useCreateTodo();

  return (
    <div className="TodoAdd">
      <input
        type="text"
        placeholder="New task title"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          createTodo(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
