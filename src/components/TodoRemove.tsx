import { useDeleteTodo } from "../todoStore";
import type { TodoRemoveProps } from "../types";

const TodoRemove = ({ currentId }: TodoRemoveProps) => {
  const deleteTodo = useDeleteTodo();

  return (
    <button onClick={() => deleteTodo(currentId)}>
      Remove
    </button>
  );
};

export default TodoRemove;
