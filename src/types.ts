export interface TodoItemType {
  id: number;
  text: string;
};

export type TodoListType = TodoItemType[];

// Props
export interface TodoItemProps {
  todo: TodoItemType;
}

export interface TodoListProps {
  todos: TodoListType;
}
