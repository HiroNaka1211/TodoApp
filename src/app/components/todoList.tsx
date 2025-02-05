"use client";
import { useEffect, useState } from "react";
import Todo from "./todo";
import style from "../styles/todoList.module.css";
import { TodoListProps } from "@/type";

export default function TodoList({ todos }: TodoListProps) {
  const [editingId, setEditingId] = useState<string | null>(null);

  const onEditingTodoId = (id: string | null) => {
    setEditingId(editingId === id ? null : id);
  };
  return (
    <ul className={style.ul}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          editingId={editingId === todo.id}
          onEditingTodoId={onEditingTodoId}
        />
      ))}
    </ul>
  );
}
