export interface TodoItemType {
  id: number;
  text: string;
};

export type TodoListType = TodoItemType[];

// Props
export interface TodoItemProps {
  todo: TodoItemType;
  deleteTodo: (currentId: number) => void;
}

export interface TodoListProps {
  todos: TodoListType;
  deleteTodo: (currentId: number) => void;
}

export interface TodoInputProps {
  createTodo: (text: string) => void;
};

export interface TodoRemoveProps {
  deleteTodo: (currentId: number) => void;
  currentId: number
};
