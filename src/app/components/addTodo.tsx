"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import style from "../styles/addTodo.module.css";
import { addTodo } from "@/api";
import { TodoType } from "@/type";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo() {
  const router = useRouter();
  const [input, setInput] = useState<string>("");
  const [errorMessage, seterrorMessage] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (input === "") {
      seterrorMessage(true);
      return;
    }
    const todo: TodoType = {
      id: uuidv4(),
      text: input,
      completed: false,
    };
    await addTodo(todo);
    setInput("");
    window.alert(input + "を登録しました。");
    router.refresh();
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      seterrorMessage(false);
    }
    setInput(e.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input} value={input} onChange={handleInput} />
      <button className={style.btn}>Register</button>
      {errorMessage ? (
        <p className={style.errorMsg}>※You have to write something</p>
      ) : null}
    </form>
  );
}
