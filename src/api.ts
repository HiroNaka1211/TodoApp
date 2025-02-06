import { TodoType } from "./type";

export const getAllTodos = async (): Promise<TodoType[]> => {
  try {
    const res = await fetch("http://localhost:3001/tasks", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP error!: Status${res.status}`);
    }
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.log("エラーです。", error);
    return [];
  }
};

export const addTodo = async (
  todo: TodoType
): Promise<TodoType | undefined> => {
  try {
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error(`HTTP error!: Status${res.status}`);
    }
    const newTodo = await res.json();
    console.log(JSON.stringify(todo));
    return newTodo;
  } catch (error) {
    console.log("エラーです。", error);
    return undefined;
  }
};

export const deleteTodo = async (id: string): Promise<TodoType | undefined> => {
  try {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error!: Status${res.status}`);
    }
    const deletedTodo = await res.json();
    return deletedTodo;
  } catch (error) {
    console.log("エラーです。", error);
    return undefined;
  }
};
