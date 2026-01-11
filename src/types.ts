export interface TodoItemType {
  id: number;
  text: string;
  isDone: boolean;
};

export type TodoListType = TodoItemType[];

export interface UpdateTodoParams {
  id: number;
  text?: string;
  isDone?: boolean;
};

// Props
export interface TodoItemProps {
  todo: TodoItemType;
};

export interface TodoRemoveProps {
  currentId: number;
};

export interface TodoEditProps {
  todo: TodoItemType;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
