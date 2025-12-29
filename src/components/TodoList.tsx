import type { TodoListProps } from "../types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }: TodoListProps) => {

  return (
    <ul>
      {todos.map(todo => <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />)}
    </ul>
  );
};

export default TodoList;
