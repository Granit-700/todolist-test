import "./TodoToolbar.css";
import { useDeleteAllTodo, useDoneCount, useTodosCount } from "../../todoStore";

const TodoToolbar = () => {

  const todosCount = useTodosCount();
  const doneCount = useDoneCount();
  const deleteAllTodos = useDeleteAllTodo();

  return (
    <div className="TodoToolBar">
      <div className="counter">
        <span>
          Todo{todosCount > 1 ? "s" : ""}: {todosCount}
        </span>
        <span>
          Done: {doneCount}
        </span>
      </div>
      {todosCount >= 1 && (
        <button
          className="deleteAllBtn"
          onClick={deleteAllTodos}
        >
          Delete All
        </button>
      )}
    </div>
  );
};

export default TodoToolbar;
