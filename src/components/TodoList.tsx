import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }: TodoListProps) => {

  return (
    <ul>
      {todos.map(todo => <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
      />)}
    </ul>
  );
};

export default TodoList;
