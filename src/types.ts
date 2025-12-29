export interface TodoItemType {
  id: number;
  text: string;
};

export type TodoListType = TodoItemType[];

// Props
export interface TodoItemProps {
  todo: TodoItemType;
  deleteTodo: (currentId: number) => void;
  updateTodo: (currentId: number, newText: string) => void;
};

export interface TodoListProps {
  todos: TodoListType;
  deleteTodo: (currentId: number) => void;
  updateTodo: (currentId: number, newText: string) => void;
};

export interface TodoInputProps {
  createTodo: (text: string) => void;
};

export interface TodoRemoveProps {
  deleteTodo: (currentId: number) => void;
  currentId: number;
};

export interface TodoEditProps {
  updateTodo: (currentId: number, newText: string) => void;
  todo: TodoItemType;
  isOpen: boolean;
  setIopen: React.Dispatch<React.SetStateAction<boolean>>;
};
