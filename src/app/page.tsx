import { getAllTodos } from "@/api";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import style from "./styles/style.module.css";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <main className={style.container}>
      <h1 className={style.title}>Todo App</h1>
      <div className={style.inputArea}>
        <AddTodo />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
