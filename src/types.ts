export interface TodoItemType {
  id: number;
  text: string;
  isDone: boolean;
};

export type TodoListType = TodoItemType[];

// Props
export interface TodoItemProps {
  todo: TodoItemType;
  deleteTodo: (currentId: number) => void;
  updateTodo: (currentId: number, newText: string, newIsDone: boolean) => boolean;
};

export interface TodoListProps {
  todos: TodoListType;
  deleteTodo: (currentId: number) => void;
  updateTodo: (currentId: number, newText: string, newIsDone: boolean) => boolean;
};

export interface TodoInputProps {
  createTodo: (text: string) => void;
};

export interface TodoRemoveProps {
  deleteTodo: (currentId: number) => void;
  currentId: number;
};

export interface TodoEditProps {
  updateTodo: (currentId: number, newText: string, newIsDone: boolean) => boolean;
  todo: TodoItemType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface TodoToolbarProps {
  deleteAllTodos: () => void;
  todosCount: number;
};
