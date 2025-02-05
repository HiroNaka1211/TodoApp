export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoListProps = {
  todos: TodoType[];
};

export interface TodoProps {
  todo: TodoType;
  editingId: boolean;
  onEditingTodoId: (id: string | null) => void;
}
