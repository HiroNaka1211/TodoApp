"use client";
import { useState } from "react";
import Todo from "./todo";
import style from "../styles/todoList.module.css";

export default function TodoList() {
  const [editingId, setEditingId] = useState<string | null>(null);

  const onEditingTodoId = (id: string | null) => {
    setEditingId(editingId === id ? null : id);
  };
  const todos = [
    { id: "1", text: "AAAAAAAAAAAAAAAAAAAAAAAABBBBBBBB", completed: true },
    { id: "2", text: "BBB", completed: false },
    { id: "3", text: "CCC", completed: true },
  ];
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
