export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export interface TodoProps {
  todo: TodoType;
  editingId: boolean;
  onEditingTodoId: (id: string | null) => void;
}
