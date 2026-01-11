import { useDeleteAllTodo, useDoneCount, useTodosCount } from "../todoStore";

const TodoToolbar = () => {

  const todosCount = useTodosCount();
  const doneCount = useDoneCount();
  const deleteAllTodos = useDeleteAllTodo();

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
