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
