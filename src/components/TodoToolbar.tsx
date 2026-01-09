import type { TodoToolbarProps } from "../types";

const TodoToolbar = ({ deleteAllTodos, todosCount, doneCount }: TodoToolbarProps) => {
  return (
    <div>
      <span>
        Todo{todosCount > 1 ? "s" : ""}: {todosCount}
      </span>
      <span>
        {" "}Done: {doneCount}
      </span>
      {todosCount >= 1 && (
        <button onClick={deleteAllTodos}>Delete All</button>
      )}
    </div>
  );
};

export default TodoToolbar;
