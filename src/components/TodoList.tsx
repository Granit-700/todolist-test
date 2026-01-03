import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }: TodoListProps) => {

  return (
    <>
      {todos.length > 0 && (
        <ul>
          {todos.map(todo => <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />)}
        </ul>
      )}
      {todos.length === 0 && <div>Empty</div>}
    </>
  );
};

export default TodoList;
