import type { TodoRemoveProps } from "../types";

const TodoRemove = ({ deleteTodo, currentId }: TodoRemoveProps) => {
  return (
    <button onClick={() => deleteTodo(currentId)}>
      Remove
    </button>
  );
};

export default TodoRemove;
