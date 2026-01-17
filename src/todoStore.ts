import { create } from "zustand";
import type { TodoListType, UpdateTodoParams } from "./types";

interface State {
  todos: TodoListType | [];
  filter: string;
  filteredTodos: TodoListType | [];
  createTodo: (text: string) => void;
  updateTodo: ({ id, text, isDone }: UpdateTodoParams) => boolean;
  deleteTodo: (id: number) => void;
  deleteAllTodo: () => void;
  setFilter: (text: string) => void;
  filterTodos: () => void;
};

const getInitTodos = (): TodoListType => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
};

const useTodoStore = create<State>((set, get) => {
  return {
    todos: getInitTodos(),
    filter: "",
    filteredTodos: getInitTodos(),
    createTodo: (text) => {
      const trimmedText = text.trim();
      if (trimmedText) {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text: trimmedText,
              isDone: false,
            }
          ]
        }));
      };
      get().filterTodos() // fix
    },
    updateTodo: ({ id, text, isDone }) => {
      const trimmedText = text?.trim();
      if (text !== undefined && !trimmedText) return false;

      set((state) => ({
        todos:
          state.todos.map(todo =>
            todo.id === id
              ? {
                ...todo,
                ...(text !== undefined && { text: trimmedText }),
                ...(isDone !== undefined && { isDone }),
              }
              : todo
          )
      }));
      get().filterTodos() // fix
      return true;
    },
    deleteTodo: (id) => {
      set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      }));
      get().filterTodos() // fix
    },
    deleteAllTodo: () => {
      set({
        todos: []
      });
      get().filterTodos() // fix
    },
    setFilter: (text) => {
      set({ filter: text });
      get().filterTodos();
    },
    filterTodos: () => {
      const filter = get().filter.trim().toLowerCase();

      set((state) => ({
        filteredTodos: filter
          ? state.todos.filter(todo => todo.text.toLowerCase().includes(filter))
          : state.todos
      }));
    },
  };
});

useTodoStore.subscribe((state, prevState) => {
  if (state.todos !== prevState.todos) {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  };
});

export const useInitTodos = () => useTodoStore(store => store.todos);
export const useTodos = () => useTodoStore(store => store.filteredTodos);
export const useCreateTodo = () => useTodoStore(store => store.createTodo);
export const useUpdateTodo = () => useTodoStore(store => store.updateTodo);
export const useDeleteTodo = () => useTodoStore(store => store.deleteTodo);
export const useDeleteAllTodo = () => useTodoStore(store =>
  store.deleteAllTodo
);

export const useSetFilter = () => useTodoStore(store => store.setFilter);

export const useTodosCount = () => useTodoStore(store => store.todos.length);
export const useDoneCount = () => useTodoStore(store =>
  store.todos.filter(todo => todo.isDone).length
);
