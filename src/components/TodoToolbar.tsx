import type { TodoToolbarProps } from "../types";

const TodoToolbar = ({ deleteAllTodos, todosCount }: TodoToolbarProps) => {
  return (
    <div>
      <span>
        todo{todosCount > 1 ? "s" : ""}: {todosCount}
      </span>
      {todosCount >= 1 && (
        <button onClick={deleteAllTodos}>Delete All</button>
      )}
    </div>
  );
};

export default TodoToolbar;
