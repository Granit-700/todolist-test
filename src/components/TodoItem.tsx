import type { TodoItemProps } from "../types";

const TodoItem = ({todo}: TodoItemProps) => {
  return (
    <li>
      <p>{todo.text}</p>
    </li>
  );
};

export default TodoItem;
