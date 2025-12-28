import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }: TodoListProps) => {

  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default TodoList;
