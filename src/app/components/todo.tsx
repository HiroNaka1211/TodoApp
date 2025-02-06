"use client";
import { TodoProps, TodoType } from "@/type";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import style from "../styles/todo.module.css";
import { deleteTodo } from "@/api";

export default function Todo({ todo, editingId, onEditingTodoId }: TodoProps) {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  const [inputText, setInputText] = useState<string>(todo.text);

  useEffect(() => {
    if (editingId) {
      ref.current?.focus();
    }
  }, [editingId]);

  const hadleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSave = () => {
    onEditingTodoId(todo.id);
  };

  const handleEdit = () => {
    onEditingTodoId(todo.id);
  };

  const handleDelete = async () => {
    const deletedTodo: TodoType | undefined = await deleteTodo(todo.id);
    alert(deletedTodo?.text + "を削除しました");
    onEditingTodoId(null);
    router.refresh();
  };

  const handleCancel = () => {
    onEditingTodoId(todo.id);
    setInputText(todo.text);
  };
  return (
    <li key={todo.id} className={style.list}>
      {editingId ? (
        <>
          <input
            className={style.input}
            type="text"
            ref={ref}
            value={inputText}
            onChange={hadleInput}
          />
          <div className={style.buttonContainer}>
            <button className={style.saveBtn} onClick={handleSave}>
              SAVE
            </button>
            <button className={style.deleteBtn} onClick={handleCancel}>
              CANCEL
            </button>
          </div>
        </>
      ) : (
        <>
          <span className={style.text}>{todo.text}</span>
          <div className={style.buttonContainer}>
            <button className={style.editBtn} onClick={handleEdit}>
              EDIT
            </button>
            <button className={style.deleteBtn} onClick={handleDelete}>
              DELETE
            </button>
          </div>
        </>
      )}
    </li>
  );
}
